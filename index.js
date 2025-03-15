// Script para controlar a animação
document.addEventListener('DOMContentLoaded', function () {
  const slider = document.getElementById('projectSlider');
  const pauseBtn = document.getElementById('pauseBtn');
  const playBtn = document.getElementById('playBtn');

  pauseBtn.addEventListener('click', function () {
    slider.style.animationPlayState = 'paused';
  });

  playBtn.addEventListener('click', function () {
    slider.style.animationPlayState = 'running';
  });
});

// Script para menu mobile
document.querySelector('.menu-toggle').addEventListener('click', function () {
  document.querySelector('.nav-links').classList.toggle('active');
});

// Script para scroll suave
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});