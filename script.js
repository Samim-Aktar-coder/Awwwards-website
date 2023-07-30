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
let navLinks = document.querySelectorAll('.fixed__nav-list .link');
let sections = document.querySelectorAll('section[id]');

function scrollActive() {
    let pageY = window.scrollY;
    sections.forEach(section => {
        let id = section.getAttribute('id');
        let sectionTop = section.offsetTop - 100;
        let sectionHeight = section.offsetHeight;
        let currentLink = document.querySelector('.fixed__nav-list a[href*= ' + id + ']');

        if (pageY > sectionTop && pageY <= sectionTop + sectionHeight) {
            currentLink.classList.add('active');
        } else {
            currentLink.classList.remove('active');
        }
    });
}

window.addEventListener('scroll', scrollActive);


//!============= SHOW BACK TO HOME ==========
let backToHome = document.querySelector('.back-to-home');

window.addEventListener('scroll', () => {
    let pageY = window.scrollY;
    if (pageY > 400) {
        backToHome.classList.add('show');
    } else {
        backToHome.classList.remove('show');
    }
});


//!============== TOGGLE FORM ==============
let loginBtn = document.querySelector('.login-btn');
let signUpBtn = document.querySelector('.sign-btn');
let signUpIcon = document.querySelector('.signup-toggle');
let loginForm = document.querySelector('.login-modal');
let sinUpForm = document.querySelector('.signup-modal');
let closeLoginForm = loginForm.querySelector('.close-form');
let closeSignUpForm = sinUpForm.querySelector('.close-form');


let loginToSignUpBtn = loginForm.querySelector('.sign-btn');
let signUpToLogin = sinUpForm.querySelector('.login-btn');


function eventListener(btn, form) {
    btn.addEventListener('click', () => {
        form.classList.toggle('show');
        document.body.classList.toggle('active-form');
    });
}

eventListener(loginBtn, loginForm);
eventListener(signUpBtn, sinUpForm);
eventListener(closeSignUpForm, sinUpForm);
eventListener(closeLoginForm, loginForm);
eventListener(signUpIcon, loginForm);

loginToSignUpBtn.addEventListener('click', () => {
    loginForm.classList.remove('show');
    sinUpForm.classList.add('show');
});
signUpToLogin.addEventListener('click', () => {
    loginForm.classList.add('show');
    sinUpForm.classList.remove('show');
});


document.addEventListener('click', (e) => {
    if (e.target.classList.contains('form-modal')) {
        sinUpForm.classList.remove('show');
        loginForm.classList.remove('show');
        document.body.classList.remove('active-form');
    }
});