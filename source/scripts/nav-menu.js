const mainNav = document.querySelector('.main-nav');
const userNav = document.querySelector('.user-nav');
const toggle = document.querySelector('.toggle');

mainNav.classList.remove('main-nav--nojs');
userNav.classList.remove('user-nav--nojs');

toggle.addEventListener('click', () => {
  if (mainNav.classList.contains('main-nav--close')) {
    mainNav.classList.replace('main-nav--close', 'main-nav--open');
    toggle.classList.replace('toggle--closed', 'toggle--opened');
  } else {
    mainNav.classList.replace('main-nav--open', 'main-nav--close');
    toggle.classList.replace('toggle--opened', 'toggle--closed');
  }
})
