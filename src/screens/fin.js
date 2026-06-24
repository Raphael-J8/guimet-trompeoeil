import { state } from '../state.js';
import { shelves } from '../data/shelves.js';

const SHELF_W = 420;
const SHELF_H = 380;

export function renderFin() {
  const preview = document.getElementById('fin-shelf-preview');
  if (state.selectedMobilier !== null) {
    const sh = shelves[state.selectedMobilier];
    preview.innerHTML = sh.svg;
    preview.style.position = 'relative';
    state.droppedObjects.forEach(obj => {
      const el = document.createElement('div');
      el.style.cssText = `position:absolute; left:${(obj.x / SHELF_W) * 100}%; top:${(obj.y / SHELF_H) * 100}%; font-size:20px; transform:translate(-50%,-50%);`;
      el.textContent = obj.emoji;
      preview.appendChild(el);
    });
  }
  drawDecorativeQR();
}

function drawDecorativeQR() {
  const canvas = document.getElementById('qr-canvas');
  const ctx = canvas.getContext('2d');
  const size = 120;
  const cell = 6;
  ctx.fillStyle = 'white';
  ctx.fillRect(0, 0, size, size);
  ctx.fillStyle = '#1a1a1a';
  for (let i = 0; i < size / cell; i++) {
    for (let j = 0; j < size / cell; j++) {
      if (Math.random() > 0.5) ctx.fillRect(i * cell, j * cell, cell - 1, cell - 1);
    }
  }
  [[0, 0], [14, 0], [0, 14]].forEach(([ox, oy]) => {
    ctx.fillStyle = '#1a1a1a';
    ctx.fillRect(ox * cell, oy * cell, 5 * cell, 5 * cell);
    ctx.fillStyle = 'white';
    ctx.fillRect(ox * cell + cell, oy * cell + cell, 3 * cell, 3 * cell);
    ctx.fillStyle = '#1a1a1a';
    ctx.fillRect(ox * cell + cell * 1.5, oy * cell + cell * 1.5, 2 * cell, 2 * cell);
  });
}
