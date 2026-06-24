import { state } from '../state.js';

let veilleRAF = null;
let veilleObjects = [];

export function resetVeille() {
  veilleObjects = [];
}

export function startVeille() {
  const canvas = document.getElementById('veille-canvas');
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const txt = document.getElementById('veille-text');
  if (state.currentLang === 'en') {
    txt.innerHTML = 'SCREENSAVER<br>TOUCH THE SCREEN TO BEGIN';
  } else {
    txt.innerHTML = 'ÉCRAN DE VEILLE<br>INVITATION À TOUCHER L\'ÉCRAN';
  }

  const emojis = ['📚', '🌿', '🪙', '🎨', '📷', '💡', '🎭', '🔭', '🏺', '🦋', '🌸', '🎸'];
  if (veilleObjects.length === 0) {
    for (let i = 0; i < 12; i++) {
      veilleObjects.push({
        emoji: emojis[i % emojis.length],
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.6,
        vy: (Math.random() - 0.5) * 0.6,
        size: 28 + Math.random() * 24,
        rot: Math.random() * Math.PI * 2,
        rotV: (Math.random() - 0.5) * 0.01,
      });
    }
  }

  if (veilleRAF) cancelAnimationFrame(veilleRAF);

  function draw() {
    if (state.currentScreen !== 'veille') return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = getComputedStyle(document.body).getPropertyValue('--cream') || '#F5F2DC';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    veilleObjects.forEach(obj => {
      obj.x += obj.vx;
      obj.y += obj.vy;
      obj.rot += obj.rotV;
      if (obj.x < -40) obj.x = canvas.width + 40;
      if (obj.x > canvas.width + 40) obj.x = -40;
      if (obj.y < -40) obj.y = canvas.height + 40;
      if (obj.y > canvas.height + 40) obj.y = -40;
      ctx.save();
      ctx.translate(obj.x, obj.y);
      ctx.rotate(obj.rot);
      ctx.font = `${obj.size}px serif`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.globalAlpha = 0.5;
      ctx.fillText(obj.emoji, 0, 0);
      ctx.restore();
    });

    veilleRAF = requestAnimationFrame(draw);
  }

  draw();
}

window.addEventListener('resize', () => {
  if (state.currentScreen === 'veille') {
    const canvas = document.getElementById('veille-canvas');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
});
