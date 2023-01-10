new WOW().init();

const iconMenu = document.querySelector('.header__burger');
const searchField = document.querySelector('.header__search');
const cartIcon = document.querySelector('.header__cart');
const menuBody = document.querySelector('.header__menu');

if(iconMenu){
    iconMenu.addEventListener("click", function(e){
        document.body.classList.toggle('body_lock')
        iconMenu.classList.toggle('header__burger_active');
        menuBody.classList.toggle('header__menu_active');
        searchField.classList.toggle('header__search_hide');
        cartIcon.classList.toggle('header__cart_hide');      
    });
}

const menuItems = document.querySelectorAll('.header__item');
menuItems.forEach(function(link) {
    link.addEventListener('click', function() {
        document.body.classList.remove('body_lock')
        iconMenu.classList.remove('header__burger_active');
        menuBody.classList.remove('header__menu_active');
        searchField.classList.remove('header__search_hide');
        cartIcon.classList.remove('header__cart_hide');
    });
});

new Swiper('.people__slider', {

    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },

    keyboard: {
        enabled: true, 
        onlyInViewport: true, 
        pageUpDown: true
    },

    mousewheel: {},

    grabCursor: true,

    breakpoints: {
        1441: {
            slidesPerView: 3,
        },

        1025: {
            slidesPerView: 2,
        },

        768: {
            slidesPerView: 1,
        },

        320: {
            slidesPerView: 1,
        }
    }

});