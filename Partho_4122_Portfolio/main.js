// main.js
const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");

menuBtn.addEventListener("click", () => {
  const expanded = menuBtn.getAttribute("aria-expanded") === "true" || false;
  menuBtn.setAttribute("aria-expanded", !expanded);
  navLinks.classList.toggle("active");
});

// ScrollReveal Animations
ScrollReveal().reveal(".header__content h1, .header__content p", {
  origin: "left",
  distance: "40px",
  duration: 800,
  easing: "ease-in-out",
  interval: 100,
  reset: false,
});

ScrollReveal().reveal(".header__image img", {
  origin: "right",
  distance: "40px",
  duration: 800,
  easing: "ease-in-out",
  reset: false,
});

ScrollReveal().reveal(".about__content, .about__image img", {
  origin: "bottom",
  distance: "30px",
  duration: 700,
  easing: "ease-in-out",
  interval: 150,
  reset: false,
});

ScrollReveal().reveal(".service__card", {
  origin: "bottom",
  distance: "25px",
  duration: 600,
  easing: "ease-in-out",
  interval: 200,
  reset: false,
});

ScrollReveal().reveal(".contact__container", {
  origin: "bottom",
  distance: "40px",
  duration: 900,
  easing: "ease-in-out",
  reset: false,
});
