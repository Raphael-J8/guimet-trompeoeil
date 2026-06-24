import { updateTexts, setLang } from './i18n.js';
import { initTimeout, resetTimeout, dismissTimeout } from './timeout.js';
import { goToScreen, resetApp, showHomeConfirm, hideHomeConfirm } from './navigation.js';
import { selectStyle } from './screens/style.js';
import { startVeille } from './screens/veille.js';

// Wire up timeout auto-reset
initTimeout(() => {
  goToScreen('veille');
  resetApp();
});

// Écran 0 — Veille
document.getElementById('screen-veille').addEventListener('click', () => goToScreen('accueil'));

// Écran 1 — Titre / langue → vers instructions
document.getElementById('btn-fr').addEventListener('click', () => { setLang('fr'); goToScreen('instructions'); });
document.getElementById('btn-en').addEventListener('click', () => { setLang('en'); goToScreen('instructions'); });

// Écran 2 — Instructions
document.getElementById('instructions-next').addEventListener('click', () => goToScreen('style'));
document.getElementById('instructions-back').addEventListener('click', () => goToScreen('accueil'));

// Écran 3 — Style
document.getElementById('style-baroque').addEventListener('click', () => selectStyle('baroque', goToScreen));
document.getElementById('style-aquarelle').addEventListener('click', () => selectStyle('aquarelle', goToScreen));
document.getElementById('style-pop').addEventListener('click', () => selectStyle('pop', goToScreen));
document.getElementById('style-back').addEventListener('click', () => goToScreen('instructions'));
document.getElementById('style-home').addEventListener('click', showHomeConfirm);

// Écran 4 — Mobilier
document.getElementById('mobilier-back').addEventListener('click', () => goToScreen('style'));
document.getElementById('mobilier-home').addEventListener('click', showHomeConfirm);

// Écran 5 — Atelier
document.getElementById('atelier-back').addEventListener('click', () => goToScreen('mobilier'));
document.getElementById('atelier-validate').addEventListener('click', () => goToScreen('fin'));
document.getElementById('atelier-home').addEventListener('click', showHomeConfirm);

// Écran 6 — Fin
document.getElementById('fin-back').addEventListener('click', () => goToScreen('atelier'));
document.getElementById('fin-home').addEventListener('click', () => { goToScreen('veille'); resetApp(); });

// Overlays
document.getElementById('timeout-yes').addEventListener('click', dismissTimeout);
document.getElementById('timeout-no').addEventListener('click', () => { goToScreen('veille'); resetApp(); dismissTimeout(); });
document.getElementById('confirm-cancel').addEventListener('click', hideHomeConfirm);
document.getElementById('confirm-ok').addEventListener('click', () => { goToScreen('veille'); resetApp(); hideHomeConfirm(); });

// Réinitialise le timeout à chaque interaction
document.addEventListener('click', resetTimeout);
document.addEventListener('touchstart', resetTimeout);

// Init
updateTexts();
startVeille();
resetTimeout();
