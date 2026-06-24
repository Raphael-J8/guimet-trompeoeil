import { state } from './state.js';

export const T = {
  fr: {
    title: 'MA BIBLIOTHÈQUE',
    subtitle: 'COMPOSEZ VOTRE ÉTAGÈRE PERSONNELLE',
    citation1: '« Une bibliothèque, c\'est une façon de parler de soi sans avoir à dire un mot. »',
    styleTitle: 'CHOISISSEZ VOTRE STYLE ET ENVIRONNEMENT',
    mobilierTitle: 'CHOISISSEZ VOTRE MOBILIER',
    mobilierHint: 'CHOISISSEZ VOTRE MOBILIER.',
    atelierHint: 'INVITATION À REMPLIR LE MOBILIER',
    shelfHint: 'GLISSEZ LES OBJETS SUR LE MOBILIER',
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
  },
  en: {
    title: 'MY LIBRARY',
    subtitle: 'COMPOSE YOUR PERSONAL SHELF',
    citation1: '"A library is a way of talking about yourself without having to say a word."',
    styleTitle: 'CHOOSE YOUR STYLE AND ENVIRONMENT',
    mobilierTitle: 'CHOOSE YOUR FURNITURE',
    mobilierHint: 'CHOOSE YOUR FURNITURE.',
    atelierHint: 'FILL YOUR FURNITURE WITH OBJECTS',
    shelfHint: 'DRAG OBJECTS ONTO THE SHELF',
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
  },
};

export function t(key) {
  return T[state.currentLang][key] || T.fr[key];
}

export function setLang(lang) {
  state.currentLang = lang;
  updateTexts();
}

export function updateTexts() {
  document.getElementById('title-text').textContent = t('title');
  document.getElementById('subtitle-text').textContent = t('subtitle');
  document.getElementById('citation1-text').textContent = t('citation1');
  document.getElementById('style-screen-title').textContent = t('styleTitle');
  document.getElementById('style-hint').textContent = t('styleTitle');
  document.getElementById('mobilier-screen-title').textContent = t('mobilierTitle');
  document.getElementById('mobilier-hint').textContent = t('mobilierHint');
  document.getElementById('atelier-hint').textContent = t('atelierHint');
  document.getElementById('shelf-hint').textContent = t('shelfHint');
  document.getElementById('fin-title').textContent = t('finTitle');
  document.getElementById('fin-citation').textContent = t('finCitation');
  document.getElementById('timeout-title').textContent = t('timeoutTitle');
  document.getElementById('timeout-msg').textContent = t('timeoutMsg');
  document.getElementById('timeout-yes').textContent = t('timeoutYes');
  document.getElementById('timeout-no').textContent = t('timeoutNo');
  document.getElementById('confirm-title').textContent = t('confirmTitle');
  document.getElementById('confirm-msg').textContent = t('confirmMsg');
  document.getElementById('confirm-cancel').textContent = t('confirmCancel');
  document.getElementById('confirm-ok').textContent = t('confirmOk');
}
