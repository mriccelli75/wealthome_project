'use strict'

// navbar toggle in mobile
const $navbar = document.querySelector("[data-navbar]");
const $navToggler = document.querySelector("[data-nav-toggle]");
console.log($navToggler);

$navToggler.addEventListener("click", ()=> $navbar.classList.toggle("active"));

const /** {NodeElement} */ $header = document.querySelector("[data-header]");

if ($header) {
  window.addEventListener("scroll", () => {
    $header.classList[window.scrollY > 50 ? "add" : "remove"]("active");
  });
}