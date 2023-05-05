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

// input mobile number

function formatPhoneNumber() {
  var input = document.getElementById('phone-input');
  var phoneNumber = input.value.replace(/\D/g, '');
  var formattedPhoneNumber = '';
  var phoneLength = phoneNumber.length;

  if (phoneLength > 0) {
    formattedPhoneNumber = '+' + phoneNumber.substring(0, 3);
  }
  if (phoneLength > 3) {
    formattedPhoneNumber += ' ' + phoneNumber.substring(3, 5);
  }
  if (phoneLength > 5) {
    formattedPhoneNumber += ' ' + phoneNumber.substring(5, 8);
  }
  if (phoneLength > 8) {
    formattedPhoneNumber += ' ' + phoneNumber.substring(8, 10);
  }
  if (phoneLength > 10) {
    formattedPhoneNumber += ' ' + phoneNumber.substring(10, 12);
  }

  input.value = formattedPhoneNumber;
}

// Form submit to telegram
function sendMessage() {
  var name = document.querySelector('input[type="text"][placeholder="Full Name"]').value;
  var email = document.querySelector('input[type="email"][placeholder="Email Address"]').value;
  var phone = document.getElementById('phone-input').value;
  var message = document.querySelector('textarea[name="message"]').value;
  var chatId = '-897613182';
  var token = '6040569885:AAEpi3Td5XuIrOrrRcyf3nEHt7hFUroS0m0';
  var text = `Name: ${name}%0AEmail: ${email}%0APhone: ${phone}%0AMessage: ${message}`;
  var url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatId}&text=${text}`;
  axios.get(url)
    .then(function (response) {
      console.log(response);
      alert('Message sent!');
    })
    .catch(function (error) {
      console.log(error);
      alert('Message failed to send.');
    });
}
