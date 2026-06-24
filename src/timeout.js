import { state } from './state.js';

const TIMEOUT_WARN = 70000;
const TIMEOUT_RESET = 20000;

let timeoutTimer = null;
let timeoutWarningTimer = null;
let _onTimeout = null;

export function initTimeout(onTimeout) {
  _onTimeout = onTimeout;
}

export function resetTimeout() {
  clearTimeout(timeoutTimer);
  clearTimeout(timeoutWarningTimer);
  if (state.currentScreen === 'veille') return;

  timeoutWarningTimer = setTimeout(() => {
    document.getElementById('timeout-overlay').classList.add('active');
    timeoutTimer = setTimeout(() => {
      document.getElementById('timeout-overlay').classList.remove('active');
      if (_onTimeout) _onTimeout();
    }, TIMEOUT_RESET);
  }, TIMEOUT_WARN);
}

export function dismissTimeout() {
  clearTimeout(timeoutTimer);
  document.getElementById('timeout-overlay').classList.remove('active');
  resetTimeout();
}
