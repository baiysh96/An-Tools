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
    dots: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',

    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },
});


const button = document.querySelector('#button');
const tooltip = document.querySelector('#tooltip');

// Pass the button, the tooltip, and some options, and Popper will do the
// magic positioning for you:
Popper.createPopper(button, tooltip, {
    placement: 'right',
});
createPopper(button, tooltip, {
    modifiers: [preventOverflow, flip],
});