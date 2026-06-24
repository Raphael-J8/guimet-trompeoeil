import { state } from '../state.js';
import { categories } from '../data/categories.js';
import { shelves } from '../data/shelves.js';
import { startDragNew, renderDroppedObjects } from '../drag.js';

export function renderAtelier() {
  renderCategoryTabs();
  renderObjectGrid(state.currentCategory);
  renderShelf();
  renderDroppedObjects();
}

export function renderCategoryTabs() {
  const tabs = document.getElementById('category-tabs');
  tabs.innerHTML = '';
  categories.forEach((cat, i) => {
    const btn = document.createElement('button');
    btn.className = 'cat-tab' + (i === state.currentCategory ? ' active' : '');
    btn.textContent = cat.icon + ' ' + (state.currentLang === 'fr' ? cat.fr.name : cat.en.name);
    btn.addEventListener('click', () => {
      state.currentCategory = i;
      document.querySelectorAll('.cat-tab').forEach(t => t.classList.remove('active'));
      btn.classList.add('active');
      renderObjectGrid(i);
      updateCategoryHeader(i);
    });
    tabs.appendChild(btn);
  });
  updateCategoryHeader(state.currentCategory);
}

export function updateCategoryHeader(i) {
  const cat = categories[i];
  document.getElementById('cat-icon').textContent = cat.icon;
  document.getElementById('cat-title').textContent = state.currentLang === 'fr' ? cat.fr.name : cat.en.name;
  document.getElementById('cat-desc').textContent = state.currentLang === 'fr' ? cat.fr.desc : cat.en.desc;
}

export function renderObjectGrid(catIndex) {
  const grid = document.getElementById('object-grid');
  grid.innerHTML = '';
  categories[catIndex].objects.forEach(obj => {
    const item = document.createElement('div');
    item.className = 'object-item';
    item.innerHTML = `<div class="obj-visual">${obj.emoji}</div><div class="obj-name">${state.currentLang === 'fr' ? obj.fr : obj.en}</div>`;
    item.addEventListener('mousedown', e => startDragNew(e, obj.emoji, obj));
    item.addEventListener('touchstart', e => startDragNew(e, obj.emoji, obj), { passive: false });
    grid.appendChild(item);
  });
}

export function renderShelf() {
  if (state.selectedMobilier === null) return;
  const sh = shelves[state.selectedMobilier];
  const container = document.getElementById('shelf-svg-container');
  const existing = container.querySelector('svg');
  if (existing) existing.remove();
  container.insertAdjacentHTML('afterbegin', sh.svg);
}
