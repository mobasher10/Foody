"use strict";

const hamburger = document.querySelector(".hamburger__menu");
const header = document.querySelector(".header");

// * MOBILE NAV
hamburger.addEventListener("click", () => {
  header.classList.toggle("nav__open");
});
