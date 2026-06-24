import { state } from './state.js';

let dragEmoji = '';
let isDraggingDropped = false;
let dragDroppedId = null;
const dragGhost = document.getElementById('drag-ghost');

function getEventXY(e) {
  if (e.touches && e.touches.length > 0) return { x: e.touches[0].clientX, y: e.touches[0].clientY };
  return { x: e.clientX, y: e.clientY };
}

export function renderDroppedObjects() {
  const layer = document.getElementById('dropped-objects-layer');
  layer.innerHTML = '';
  state.droppedObjects.forEach((obj, i) => {
    const el = document.createElement('div');
    el.className = 'dropped-obj';
    el.id = 'dobj-' + i;
    el.textContent = obj.emoji;
    el.style.left = obj.x + 'px';
    el.style.top = obj.y + 'px';
    el.addEventListener('mousedown', e => startDragDropped(e, i));
    el.addEventListener('touchstart', e => startDragDropped(e, i), { passive: false });
    layer.appendChild(el);
  });
}

export function startDragNew(e, emoji) {
  e.preventDefault();
  isDraggingDropped = false;
  dragEmoji = emoji;
  const { x, y } = getEventXY(e);
  dragGhost.textContent = emoji;
  dragGhost.style.display = 'block';
  dragGhost.style.left = x + 'px';
  dragGhost.style.top = y + 'px';
  bindDragEvents();
}

function startDragDropped(e, index) {
  e.preventDefault();
  e.stopPropagation();
  isDraggingDropped = true;
  dragDroppedId = index;
  dragEmoji = state.droppedObjects[index].emoji;
  const { x, y } = getEventXY(e);
  dragGhost.textContent = dragEmoji;
  dragGhost.style.display = 'block';
  dragGhost.style.left = x + 'px';
  dragGhost.style.top = y + 'px';
  const el = document.getElementById('dobj-' + index);
  if (el) el.style.opacity = '0.3';
  bindDragEvents();
}

function bindDragEvents() {
  document.addEventListener('mousemove', onDragMove);
  document.addEventListener('mouseup', onDragEnd);
  document.addEventListener('touchmove', onDragMove, { passive: false });
  document.addEventListener('touchend', onDragEnd);
}

function onDragMove(e) {
  e.preventDefault();
  const { x, y } = getEventXY(e);
  dragGhost.style.left = x + 'px';
  dragGhost.style.top = y + 'px';
}

function vibrateAndRemove(index) {
  const el = document.getElementById('dobj-' + index);
  if (el) {
    el.style.opacity = '1';
    el.classList.add('vibrate');
    setTimeout(() => {
      state.droppedObjects.splice(index, 1);
      renderDroppedObjects();
    }, 420);
  } else {
    state.droppedObjects.splice(index, 1);
    renderDroppedObjects();
  }
}

function onDragEnd(e) {
  e.preventDefault();
  const { x, y } = getEventXY(e);
  dragGhost.style.display = 'none';

  document.removeEventListener('mousemove', onDragMove);
  document.removeEventListener('mouseup', onDragEnd);
  document.removeEventListener('touchmove', onDragMove);
  document.removeEventListener('touchend', onDragEnd);

  const container = document.getElementById('shelf-svg-container');
  const rect = container.getBoundingClientRect();
  const relX = x - rect.left;
  const relY = y - rect.top;
  const isInsideShelf = relX >= 0 && relX <= rect.width && relY >= 0 && relY <= rect.height;
  // Objet posé contre une paroi → vibration + retour au carousel
  const onWall = relX < 18 || relX > rect.width - 18 || relY < 18 || relY > rect.height - 18;

  if (isDraggingDropped) {
    if (isInsideShelf) {
      state.droppedObjects[dragDroppedId].x = relX;
      state.droppedObjects[dragDroppedId].y = relY;
      renderDroppedObjects();
      if (onWall) vibrateAndRemove(dragDroppedId);
    } else {
      // Déposé hors de la bibliothèque → animation disparition
      const el = document.getElementById('dobj-' + dragDroppedId);
      if (el) {
        el.style.opacity = '1';
        el.classList.add('disappear');
        setTimeout(() => {
          state.droppedObjects.splice(dragDroppedId, 1);
          renderDroppedObjects();
        }, 400);
      } else {
        state.droppedObjects.splice(dragDroppedId, 1);
        renderDroppedObjects();
      }
    }
  } else {
    if (isInsideShelf) {
      state.droppedObjects.push({ emoji: dragEmoji, x: relX, y: relY });
      renderDroppedObjects();
      if (onWall) {
        // Posé contre une paroi → vibration + retour
        vibrateAndRemove(state.droppedObjects.length - 1);
      }
    }
    // Si déposé en dehors, l'objet reste simplement dans le carousel
  }

  isDraggingDropped = false;
  dragDroppedId = null;
}
