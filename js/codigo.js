let welcomeNav = document.querySelector('.nav__welcome');
let searchNav = document.querySelector('.nav__search');
let menuNav = document.querySelector('.nav__menu__contenedor__right__box');
let btnMenu = document.querySelector('.nav__menu__contenedor--iconMenu')
btnMenu.addEventListener('click', function(e){
    console.log('hiciste click');
    e.preventDefault();
    menuNav.classList.toggle('active');
});
window.addEventListener('scroll', function(){

    if(scrollY > 0){
        console.log('es mayor a cero');
        welcomeNav.classList.add('d-hide');
        searchNav.classList.add('d-hide');
    } else{
        console.log('regresaste al cero');
        welcomeNav.classList.remove('d-hide');
        searchNav.classList.remove('d-hide');
    }
})