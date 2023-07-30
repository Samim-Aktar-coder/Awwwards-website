//!============ Show Search Modal ============;
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
    grabCursor: true
});

let collectionsSwiper = new Swiper(".collection__content", {
    spaceBetween: 20,
    grabCursor: true,
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
//!=============== PLAY VIDEO ON SCROLL ============
let mainVideoContainer = document.querySelector('.main-video');


window.addEventListener('scroll', () => {
    let pageY = window.scrollY;
    let video = mainVideoContainer.querySelector('video');
    let mainVideoContainerTop = mainVideoContainer.offsetTop - 400;
    let mainVideoContainerHeight = mainVideoContainer.offsetHeight + 200;

    if (pageY > mainVideoContainerTop && pageY <= mainVideoContainerTop + mainVideoContainerHeight) {
        video.play();
    } else {
        video.pause();
    }
});

let hoverVideo = document.querySelectorAll('.hover-video');

function pauseHoverVideo(e) {
    if (!e.target.classList.contains('layer')) {
        hoverVideo.forEach(video => {
            video.pause();
        });
    }
}

window.addEventListener('mousemove', (e) => {
    if (e.target.classList.contains('hover-video')) {
        e.target.play();
    } else {
        pauseHoverVideo(e);
    }
});

//!============= ACTIVE LINK ON SCROLL ==========
let 
