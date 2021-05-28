let menuToggler = document.querySelector('.fa-bars');
let menuClose = document.querySelector('.navegacion__close');
let nav = document.querySelector('.navegacion');
let body = document.querySelector('body');
let over = document.querySelector('.overlay');

menuToggler.addEventListener('click', function() {
    nav.classList.toggle('active');
    body.classList.toggle('fixed-position');
    over.classList.toggle('menu-open')
});

menuClose.addEventListener("click", () => {
    nav.classList.remove('active');
    body.classList.remove('fixed-position');
    over.classList.remove('menu-open')
})