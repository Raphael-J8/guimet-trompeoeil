import { state } from '../state.js';
import { shelves } from '../data/shelves.js';

export function renderMobilierGrid(navigate) {
  const grid = document.getElementById('mobilier-grid');
  grid.innerHTML = '';
  shelves.forEach((sh, i) => {
    const card = document.createElement('div');
    card.className = 'mobilier-card' + (state.selectedMobilier === i ? ' selected' : '');
    card.innerHTML = sh.svg + `<div class="mobilier-card-label">${state.currentLang === 'fr' ? sh.fr : sh.en}</div>`;
    card.addEventListener('click', () => {
      state.selectedMobilier = i;
      document.querySelectorAll('.mobilier-card').forEach(c => c.classList.remove('selected'));
      card.classList.add('selected');
      setTimeout(() => navigate('atelier'), 400);
    });
    grid.appendChild(card);
  });
}
