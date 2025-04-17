'use strict';

const mainMenuBtn = document.getElementById('main-menu-btn');
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileNav = document.querySelector('.mobile-nav');
const loaderContainer = document.querySelector('.loader-container');
// const image1 = document.querySelector('.image-1');
// const image2 = document.querySelector('.image-2');
// const image3 = document.querySelector('.image-3');
// const image4 = document.querySelector('.image-4');

window.addEventListener('DOMContentLoaded', function () {
    loaderContainer.style.display = 'none';
})

function toggleMenu() {
    mobileNav.classList.toggle('active');
    mainMenuBtn.classList.toggle('active');
}

mainMenuBtn.addEventListener('click', toggleMenu);
mobileMenuBtn.addEventListener('click', toggleMenu);

// gsap.from(".image-1", { // selector text, Array, or object
//     x: '120%', 
//     duration: 2,
//     rotate: 10,
//     ease: "power2.inOut",
//   });