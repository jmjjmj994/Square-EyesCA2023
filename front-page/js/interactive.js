"use strict";

//nav
const hamburgerMenu = document.querySelector(".hamburger-menu");
const hamburger = document.querySelector(".fa-bars");


const navUl = document.querySelector(".nav-ul");
const subTitle1 = document.querySelector(".sub-title1")
const subTitle2 = document.querySelector(".sub-title2")

const navDropLi = document.querySelector(".nav-li-drop");

const navItem = document.querySelector(".nav-item-drop");
const offScreenMenu = document.querySelector(".off-screen-menu")

//nav


hamburgerMenu.addEventListener('click', () => {

    hamburgerMenu.classList.toggle('active');
    offScreenMenu.classList.toggle("active")
});



