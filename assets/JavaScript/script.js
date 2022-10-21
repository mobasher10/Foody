"use strict";

const hamburger = document.querySelector(".hamburger__menu");
const header = document.querySelector(".header");
const heroSection = document.querySelector(".section__hero");

// * MOBILE NAV
hamburger.addEventListener("click", () => {
  header.classList.toggle("nav__open");
});

const stickyNav = function (entries) {
  const [entry] = entries;
  if (!entry.isIntersecting) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
};
const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: "-70px",
});

headerObserver.observe(heroSection);
