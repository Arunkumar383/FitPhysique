const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

ScrollReveal().reveal(".header__content h1", {
  ...scrollRevealOption,
});
ScrollReveal().reveal(".header__content h2", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".header__content p", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".header__content .header__btn", {
  ...scrollRevealOption,
  delay: 1500,
});

ScrollReveal().reveal(".about__card", {
  duration: 1000,
  interval: 500,
});

ScrollReveal().reveal(".trainer__card", {
  ...scrollRevealOption,
  interval: 500,
});

ScrollReveal().reveal(".blog__card", {
  ...scrollRevealOption,
  interval: 500,
});

const swiper = new Swiper('.swiper', {
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  autoplay: {
    delay: 5000, 
    disableOnInteraction: false, 
  },
});

document.addEventListener("DOMContentLoaded", function() {
 
  document.body.classList.add("loading");

  
  window.addEventListener("load", function() {
    setTimeout(function() {
      document.body.classList.remove("loading");
      document.getElementById("loader").style.display = "none";
    }, 10); 
  });
});
window.onload=function(){
  const sendButton=document.getElementById('sendWhatsApp');
if(sendButton){
sendButton.addEventListener('click', function () {
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  
  if (!name || !email || !message) {
    alert('Please fill out all fields before sending.');
    return; 
  }

 

  const whatsappNumber = '6382184993'; 
  const whatsappMessage = `Name: ${name}%0AEmail: ${email}%0AMessage: ${message}`;
  const whatsappURL = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  
  window.open(whatsappURL, '_blank');

  
  document.getElementById('contactForm').reset();
});
}
}



// main.js



