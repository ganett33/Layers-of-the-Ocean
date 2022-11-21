let sky = document.getElementById('sky');
let islands = document.getElementById('islands');
let sea = document.getElementById('sea');
let text = document.getElementById('text');
let btn = document.getElementById('btn');
let header = document.getElementById('header');

window.addEventListener('scroll', function () {
  let value = window.scrollY;
  sky.style.top = value * 0.1 + 'px';
  islands.style.top = value * 0.3 + 'px';
  sea.style.top = value * 0.12 + 'px';
  text.style.marginTop = value * 0.1 + 'px';
  btn.style.marginTop = value * 0.5 + 'px';
  header.style.left = value * 0.4 + 'px';
});
