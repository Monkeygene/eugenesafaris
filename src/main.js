import './styles.css';
import './nav.js';
import './tabs.js';

document.addEventListener('DOMContentLoaded', () => {
  const video = document.getElementById('heroVideo');
  if (video) {
    video.play().catch(() => {});
  }
});