import { state } from '../state.js';

export function selectStyle(styleName, navigate) {
  state.selectedStyle = styleName;
  document.querySelectorAll('.style-card').forEach(c => c.classList.remove('selected'));
  document.getElementById('style-' + styleName).classList.add('selected');
  document.body.className = 'style-' + styleName;
  setTimeout(() => navigate('mobilier'), 400);
}
