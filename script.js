let sky = document.getElementById('sky');
let cloud = document.getElementById('cloud');
let islandsLeft = document.getElementById('islandsLeft');
let islandsRight = document.getElementById('islandsRight');
let sea = document.getElementById('sea');
let text = document.getElementById('text');
let btn = document.getElementById('btn');
let header = document.getElementById('header');

// animation for hero
window.addEventListener('scroll', function () {
  let value = window.scrollY;

  sky.style.top = value * 0.4 + 'px';
  cloud.style.top = value * -0.5 + 'px';
  islandsLeft.style.top = value * 0.4 + 'px';
  islandsRight.style.top = value * 0.4 + 'px';
  sea.style.top = value * 0.35 + 'px';
  header.style.top = value * 0.4 + 'px';

  cloud.style.marginTop = value * 1 + 'px';
  text.style.marginTop = value * 0.1 + 'px';
  btn.style.marginTop = value * 0.5 + 'px';
});

// remove active class in nav ul li
const w = window.innerWidth;
const activeClass = document.getElementById('active');
if (w <= window.screen.width) {
  activeClass.classList.remove('active');
}
