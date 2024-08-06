// JavaScript to handle menu toggle and scroll reveal animations

// Toggle Menu
const menuBtn = document.getElementById('menu-btn');
const navLinks = document.getElementById('nav-links');

menuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    menuBtn.classList.toggle('ri-close-line');
});

// Scroll Reveal Animations
const sr = ScrollReveal({
    distance: '50px',
    duration: 1500,
    delay: 200,
    reset: true
});

sr.reveal('.header__image', { origin: 'left' });
sr.reveal('.header__content', { origin: 'right' });
sr.reveal('.about-us__container', { origin: 'bottom' });
sr.reveal('.menu__items', { origin: 'bottom', interval: 200 });
sr.reveal('.contact__container', { origin: 'bottom' });
