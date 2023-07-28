//!============ Show Search Modal ============
let searchBar = document.querySelector('.search-bar');


document.addEventListener('click', (e) => {
    if (e.target.classList.contains('input') || e.target.classList.contains('search-modal')) {
        searchBar.classList.add('show');
    } else {
        searchBar.classList.remove('show');
    }
});

//!============ Show Inspiritaion Modal ============
let inspiration = document.querySelector('.inspiration');


document.addEventListener('click', (e) => {
    if (e.target.classList.contains('inspiration')) {
        inspiration.classList.toggle('show');
    } else {
        inspiration.classList.remove('show');
    }
});


//!============ Show Nav menu ============
let menuToggle = document.querySelector('.menu-toggle');
let fixedNav = document.querySelector('.fixed-nav');

menuToggle.addEventListener('click', () => {
    if (fixedNav.classList.contains('active')) {
        fixedNav.classList.remove('active');
        menuToggle.classList.replace('ri-close-line', 'ri-menu-line');
    } else {
        fixedNav.classList.add('active');
        menuToggle.classList.replace('ri-menu-line', 'ri-close-line');
    }
});


fixedNav.addEventListener('mouseleave', () => {
    if (fixedNav.classList.contains('active')) {
        fixedNav.classList.remove('active');
        menuToggle.classList.replace('ri-close-line', 'ri-menu-line');
    }
});




document.body.addEventListener('click', () => {
    console.log('click');
});

//!============= SWIPER JS ========
let nomineesSwiper = new Swiper(".nominees__content", {
    spaceBetween: 30,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        610: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        1100: {
            slidesPerView: 3,
            spaceBetween: 40,
        }
    }
});

let directorySwiper = new Swiper(".directory-slider", {
    spaceBetween: 30,
    effect: "fade",
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    grabCursor:true
});