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

// Static button event listeners
document.getElementById('screen-veille').addEventListener('click', () => goToScreen('accueil'));

document.getElementById('btn-fr').addEventListener('click', () => { setLang('fr'); goToScreen('style'); });
document.getElementById('btn-en').addEventListener('click', () => { setLang('en'); goToScreen('style'); });

document.getElementById('style-baroque').addEventListener('click', () => selectStyle('baroque', goToScreen));
document.getElementById('style-aquarelle').addEventListener('click', () => selectStyle('aquarelle', goToScreen));
document.getElementById('style-pop').addEventListener('click', () => selectStyle('pop', goToScreen));

document.getElementById('style-back').addEventListener('click', () => goToScreen('accueil'));
document.getElementById('style-home').addEventListener('click', showHomeConfirm);

document.getElementById('mobilier-back').addEventListener('click', () => goToScreen('style'));
document.getElementById('mobilier-home').addEventListener('click', showHomeConfirm);

document.getElementById('atelier-back').addEventListener('click', () => goToScreen('mobilier'));
document.getElementById('atelier-validate').addEventListener('click', () => goToScreen('fin'));
document.getElementById('atelier-home').addEventListener('click', showHomeConfirm);

document.getElementById('fin-back').addEventListener('click', () => goToScreen('atelier'));
document.getElementById('fin-home').addEventListener('click', () => { goToScreen('veille'); resetApp(); });

document.getElementById('timeout-yes').addEventListener('click', dismissTimeout);
document.getElementById('timeout-no').addEventListener('click', () => { goToScreen('veille'); resetApp(); dismissTimeout(); });

document.getElementById('confirm-cancel').addEventListener('click', hideHomeConfirm);
document.getElementById('confirm-ok').addEventListener('click', () => { goToScreen('veille'); resetApp(); hideHomeConfirm(); });

// Global interaction resets timeout
document.addEventListener('click', resetTimeout);
document.addEventListener('touchstart', resetTimeout);

// Init
updateTexts();
startVeille();
resetTimeout();
