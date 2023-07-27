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
    console.log('click')
})