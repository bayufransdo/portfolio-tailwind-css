// Navbar Fixed

window.onscroll = function () {
    const header = document.querySelector("header");
    const fixedNav = header.offsetTop;

    if (window.scrollY > fixedNav) {
        header.classList.add("navbar-fixed");
    } else {
        header.classList.remove("navbar-fixed");
    }
};

// Hamburger

const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");

hamburger.addEventListener("click", function () {
    hamburger.classList.toggle("hamburger-active");
    if (navMenu.classList.contains("scale-0")) {
        navMenu.classList.add("scale-100");
        navMenu.classList.remove("scale-0");
    } else {
        navMenu.classList.add("scale-0");
        navMenu.classList.remove("scale-100");
    }
});
