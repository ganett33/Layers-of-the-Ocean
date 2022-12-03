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

// read more function
const NUMCHAR = 500;
const contents = document.querySelectorAll('.card-content');
const readMoreBtn = document.querySelector('.read-more-btn');

contents.forEach((content) => {
  if (content.textContent.length < NUMCHAR) {
    content.nextElementSibling.style.display = 'none';
  } else {
    let displayText = content.textContent.slice(0, NUMCHAR);
    let moreText = content.textContent.slice(NUMCHAR);
    content.innerHTML = `${displayText}<span class="dots">...</span><span class="hide more">${moreText}</span>`;
  }
});

function readMore(btn) {
  let card = btn.parentElement;
  card.querySelector('.dots').classList.toggle('hide');
  card.querySelector('.more').classList.toggle('hide');
  btn.textContent == 'read more'
    ? (btn.textContent = 'read less')
    : (btn.textContent = 'read more');
}
