//Toggle Mobile Menu
document.addEventListener("DOMContentLoaded", () => {
  const toggleButton = document.querySelector(".mobile-menu-toggle");
  const mobileMenu = document.querySelector(".mobile-menu-items");

  toggleButton.addEventListener("click", () => {
    mobileMenu.classList.toggle("active");
  });
});

//Change navbar bg on scroll
const nav = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 0) {
    nav.classList.add("navbar-scroll");
  } else {
    nav.classList.remove("navbar-scroll");
  }
});
