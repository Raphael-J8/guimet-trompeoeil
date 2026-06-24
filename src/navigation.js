import { state } from './state.js';
import { resetTimeout } from './timeout.js';
import { startVeille, resetVeille } from './screens/veille.js';
import { renderMobilierGrid } from './screens/mobilier.js';
import { renderAtelier } from './screens/atelier.js';
import { renderFin } from './screens/fin.js';

export function goToScreen(name) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById('screen-' + name).classList.add('active');
  state.currentScreen = name;
  resetTimeout();

  if (name === 'mobilier') renderMobilierGrid(goToScreen);
  if (name === 'atelier') renderAtelier();
  if (name === 'fin') renderFin();
  if (name === 'veille') startVeille();
}

export function resetApp() {
  state.selectedStyle = null;
  state.selectedMobilier = null;
  state.currentCategory = 0;
  state.droppedObjects = [];
  document.body.className = '';
  resetVeille();
}

export function showHomeConfirm() {
  document.getElementById('home-confirm').classList.add('active');
}

export function hideHomeConfirm() {
  document.getElementById('home-confirm').classList.remove('active');
}
