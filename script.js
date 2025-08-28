const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu-bar');

hamburger.addEventListener('click', () => {
    menu.classList.toggle('active');
});