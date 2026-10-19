'use strict';
// Play only the video the visitor chooses, and pause it when it leaves the screen.
const videos = [...document.querySelectorAll('video')];
videos.forEach(video => video.addEventListener('play', () => {
  videos.forEach(other => { if (other !== video) other.pause(); });
}));
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(({ target, isIntersecting }) => {
      if (!isIntersecting && !target.paused) target.pause();
    });
  }, { threshold: 0.05 });
  videos.forEach(video => observer.observe(video));
}
