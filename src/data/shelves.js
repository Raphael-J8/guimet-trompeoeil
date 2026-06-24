import escalierSVG    from '../assets/shelves/escalier.svg?raw';
import croixSVG       from '../assets/shelves/croix.svg?raw';
import irreguliereeSVG from '../assets/shelves/irreguliere.svg?raw';
import reguliereSVG   from '../assets/shelves/reguliere.svg?raw';
import horizontalesSVG from '../assets/shelves/horizontales.svg?raw';
import porteSVG       from '../assets/shelves/porte.svg?raw';

function S(x, y, w, h) { return { x, y, w, h }; }

export const shelves = [
  {
    id: 'escalier',
    fr: 'Escalier',
    en: 'Staircase',
    slots: [
      S(180, 0, 80, 80),
      S(90, 80, 80, 80), S(180, 80, 80, 80),
      S(0, 160, 80, 80), S(90, 160, 80, 80), S(180, 160, 80, 80),
    ],
    svg: escalierSVG,
  },
  {
    id: 'croix',
    fr: 'Croix grecque',
    en: 'Greek Cross',
    slots: [
      S(80, 0, 80, 80),
      S(0, 80, 80, 80), S(80, 80, 80, 80), S(160, 80, 80, 80),
      S(80, 160, 80, 80),
    ],
    svg: croixSVG,
  },
  {
    id: 'irreguliere',
    fr: 'Mosaïque irrégulière',
    en: 'Irregular Mosaic',
    slots: [
      S(0, 0, 100, 100), S(110, 0, 80, 80),
      S(0, 110, 80, 80), S(90, 90, 100, 100),
      S(200, 60, 90, 120),
    ],
    svg: irreguliereeSVG,
  },
  {
    id: 'reguliere',
    fr: 'Mosaïque régulière',
    en: 'Regular Mosaic',
    slots: [
      S(0, 0, 80, 80),   S(80, 0, 80, 80),   S(160, 0, 80, 80),
      S(0, 80, 80, 80),  S(80, 80, 80, 80),  S(160, 80, 80, 80),
      S(0, 160, 80, 80), S(80, 160, 80, 80), S(160, 160, 80, 80),
    ],
    svg: reguliereSVG,
  },
  {
    id: 'horizontales',
    fr: 'Étagères horizontales',
    en: 'Horizontal Shelves',
    slots: [
      S(0, 0, 80, 70),   S(90, 0, 80, 70),   S(180, 0, 80, 70),
      S(0, 80, 80, 70),  S(90, 80, 80, 70),  S(180, 80, 80, 70),
      S(0, 160, 80, 70), S(90, 160, 80, 70), S(180, 160, 80, 70),
    ],
    svg: horizontalesSVG,
  },
  {
    id: 'porte',
    fr: 'Porte',
    en: 'Door',
    slots: [
      S(0, 0, 110, 80),   S(120, 0, 110, 80),
      S(0, 90, 110, 80),  S(120, 90, 110, 80),
      S(50, 180, 130, 80),
    ],
    svg: porteSVG,
  },
];
