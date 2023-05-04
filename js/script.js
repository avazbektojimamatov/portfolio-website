// Toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
}

// Scroll sections avite link

const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('header nav a');

window.addEventListener('scroll', () => {
  const currentPos = window.pageYOffset;

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 150;
    const sectionHeight = section.offsetHeight;
    const sectionId = section.getAttribute('id');

    if (currentPos >= sectionTop && currentPos < sectionTop + sectionHeight) {
      navLinks.forEach(link => {
        link.classList.remove('active');
      });
      document.querySelector(`header nav a[href*=${sectionId}]`).classList.add('active');
    }
  });

  const header = document.querySelector('header');

  header.classList.toggle("sticky", window.scrollY > 100);

  // remove toggle icon and navbar when click navbar link (scroll)

  menuIcon.classList.remove('bx-x');
  navbar.classList.remove('active');
});

// Scroll reveal

ScrollReveal({
  // reset: true,
  distance: '80px',
  duration: 2000,
  delay: 200
})

ScrollReveal().reveal('.home-content, .heading', {origin: 'top'})
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', {origin: 'bottom'})
ScrollReveal().reveal('.home-content h1, .about img', {origin: 'left'})
ScrollReveal().reveal('.home-content p, .about-content', {origin: 'right'})

// typed js
const typed = new Typed('.multiple-text', {
  strings: ['Frontend Developer'],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true
})