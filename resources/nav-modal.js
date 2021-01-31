"use strict";

/////////////////////
// CONTACT FORM
const contact = document.querySelectorAll(".open-contact");
const modal = document.querySelector(".modal");
const contactOverlay = document.querySelector(".contact--overlay");
const btnClose = document.querySelector(".btn--close-modal");
const btnSend = document.querySelector(".btn--send");

const openContactForm = function () {
  contact.forEach((el) =>
    el.addEventListener("click", function (e) {
      e.preventDefault();
      modal.classList.remove("hidden");
      contactOverlay.classList.remove("hidden");
    })
  );

  contactOverlay.addEventListener("click", function () {
    modal.classList.add("hidden");
    contactOverlay.classList.add("hidden");
  });

  btnClose.addEventListener("click", function () {
    modal.classList.add("hidden");
    contactOverlay.classList.add("hidden");
  });
};
openContactForm();

/////////////////
// MOBILE NAV
const btnNav = document.querySelector(".btn__nav");
const nav = document.querySelector(".navbar__nav");
const navIcon = document.querySelector(".nav__icon");
const navOverlay = document.querySelector(".nav--overlay");
// console.log(nav.children);

const openNav = function () {
  btnNav.addEventListener("click", function (e) {
    e.preventDefault();
    nav.classList.toggle("open");
    navIcon.classList.toggle("ion-navicon-round");
    navIcon.classList.toggle("ion-close-round");
    navOverlay.classList.toggle("hidden");
  });
};
openNav();

const closeNav = function () {
  nav.classList.remove("open");
  navIcon.classList.add("ion-navicon-round");
  navIcon.classList.remove("ion-close-round");
  navOverlay.classList.add("hidden");
};

nav.childNodes.forEach((e) => e.addEventListener("click", closeNav));
navOverlay.addEventListener("click", closeNav);
