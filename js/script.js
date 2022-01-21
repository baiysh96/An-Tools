const myBurger = document.querySelector('.burger')
const myMenu = document.querySelector('.menu')
const menuItems = document.querySelectorAll('.menu-item')

myBurger.addEventListener('click', () =>{
    myBurger.classList.toggle('show-menu')
    document.body.classList.toggle('o-hidden')
})

myBurger.addEventListener('click', () =>{
    myMenu.classList.toggle('show')
    document.body.classList.toggle('o-hidden')
})


menuItems.forEach( oneLink=> {
    oneLink.addEventListener('click', () => {
        myMenu.classList.remove('show-menu')
        myMenu.classList.remove('show')
        document.body.classList.toggle('o-hidden')
    })
})
const range = document.getElementById('range');


const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView: 1,
    spaceBetween: 20,



    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        click: true,
        loop: true,

    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    breakpoints: {
        320: {
            spaceBetween: 50,
            slidesPerView: 1,
        },
        768:{
            spaceBetween: 20,
            slidesPerView: 1,
        },
        992:{
            spaceBetween: 10,
            slidesPerView: 1,
        },
    },
});

const dropdownElementList = [].slice.call(document.querySelectorAll('.dropdown-toggle'))
 const dropdownList = dropdownElementList.map(function (dropdownToggleEl) {
    return new bootstrap.Dropdown('dropdownToggleEl')
})
$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        glyphOrientationHorizontal: true,
        items: 3,
        loop: true,
        nav: true,
    });
});
AOS.init();
