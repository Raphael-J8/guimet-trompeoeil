import { state } from './state.js';

export const T = {
  fr: {
    title: 'MA BIBLIOTHÈQUE',
    subtitle: 'COMPOSEZ VOTRE ÉTAGÈRE PERSONNELLE',
    citation1: '« Une bibliothèque, c\'est une façon de parler de soi sans avoir à dire un mot. »',
    instructionsIntro: 'Explorez l\'art de la bibliothèque en trompe-l\'œil. Composez votre étagère personnelle en sélectionnant des objets qui vous ressemblent et en les disposant librement dans votre bibliothèque.',
    instructionsBtn: 'COMMENCER →',
    styleTitle: 'CHOISISSEZ VOTRE STYLE ET ENVIRONNEMENT',
    mobilierTitle: 'CHOISISSEZ VOTRE BIBLIOTHÈQUE',
    atelierHint: 'Glissez-déposez l\'objet de votre choix sur votre bibliothèque',
    finTitle: 'VOTRE BIBLIOTHÈQUE EST CRÉÉE !',
    finCitation: '« Les livres sont des miroirs : on n\'y trouve que ce qu\'on y apporte déjà. »',
    timeoutTitle: 'Êtes-vous toujours là ?',
    timeoutMsg: 'L\'expérience va se réinitialiser dans quelques secondes.',
    timeoutYes: 'OUI, CONTINUER',
    timeoutNo: 'RECOMMENCER',
    confirmTitle: 'RETOUR À L\'ACCUEIL ?',
    confirmMsg: 'Votre progression sera perdue.',
    confirmCancel: 'ANNULER',
    confirmOk: 'CONFIRMER',
    retour: 'Retour',
    accueil: 'Accueil',
    valider: 'Valider',
    scanner: 'Scannez pour partager',
  },
  en: {
    title: 'MY LIBRARY',
    subtitle: 'COMPOSE YOUR PERSONAL SHELF',
    citation1: '"A library is a way of talking about yourself without having to say a word."',
    instructionsIntro: 'Explore the art of the trompe-l\'oeil library. Compose your personal shelf by selecting objects that resemble you and arranging them freely in your bookcase.',
    instructionsBtn: 'BEGIN →',
    styleTitle: 'CHOOSE YOUR STYLE AND ENVIRONMENT',
    mobilierTitle: 'CHOOSE YOUR BOOKCASE',
    atelierHint: 'Drag and drop the object of your choice onto your bookshelf',
    finTitle: 'YOUR LIBRARY IS CREATED!',
    finCitation: '"Books are mirrors: you only find in them what you already bring."',
    timeoutTitle: 'Are you still there?',
    timeoutMsg: 'The experience will reset in a few seconds.',
    timeoutYes: 'YES, CONTINUE',
    timeoutNo: 'RESTART',
    confirmTitle: 'RETURN TO HOME?',
    confirmMsg: 'Your progress will be lost.',
    confirmCancel: 'CANCEL',
    confirmOk: 'CONFIRM',
    retour: 'Back',
    accueil: 'Home',
    valider: 'Validate',
    scanner: 'Scan to share',
  },
};

export function t(key) {
  return T[state.currentLang][key] || T.fr[key];
}

export function setLang(lang) {
  state.currentLang = lang;
  updateTexts();
}

function setText(id, value) {
  const el = document.getElementById(id);
  if (el) el.textContent = value;
}

export function updateTexts() {
  setText('title-text',          t('title'));
  setText('subtitle-text',       t('subtitle'));
  setText('citation1-text',      t('citation1'));
  setText('instructions-intro',  t('instructionsIntro'));
  setText('instructions-next',   t('instructionsBtn'));
  setText('style-screen-title',  t('styleTitle'));
  setText('mobilier-screen-title', t('mobilierTitle'));
  setText('atelier-hint',        t('atelierHint'));
  setText('fin-title',           t('finTitle'));
  setText('fin-citation',        t('finCitation'));
  setText('timeout-title',       t('timeoutTitle'));
  setText('timeout-msg',         t('timeoutMsg'));
  setText('timeout-yes',         t('timeoutYes'));
  setText('timeout-no',          t('timeoutNo'));
  setText('confirm-title',       t('confirmTitle'));
  setText('confirm-msg',         t('confirmMsg'));
  setText('confirm-cancel',      t('confirmCancel'));
  setText('confirm-ok',          t('confirmOk'));
  setText('lbl-scanner',         t('scanner'));
  // Nav labels (Retour / Accueil / Valider)
  ['2','3','4','5','6'].forEach(n => setText('lbl-retour-' + n, t('retour')));
  ['3','4','5','6'].forEach(n => setText('lbl-accueil-' + n, t('accueil')));
  setText('lbl-valider',         t('valider'));
}
