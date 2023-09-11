// Navbar Fixed

window.onscroll = function () {
    const header = document.querySelector("header");
    const toTop = document.querySelector("#to-top");
    const fixedNav = header.offsetTop;

    if (window.scrollY > fixedNav) {
        header.classList.add("navbar-fixed");
        toTop.classList.add("flex");
        toTop.classList.remove("hidden");
    } else {
        header.classList.remove("navbar-fixed");
        toTop.classList.add("hidden");
        toTop.classList.remove("flex");
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

// Klik di luar Hamburger
window.addEventListener("click", function (e) {
    if (e.target != navMenu && e.target != hamburger) {
        if (navMenu.classList.contains("scale-0")) {
            navMenu.classList.add("scale-100");
            hamburger.classList.add("hamburger-active");
            navMenu.classList.remove("scale-0");
        } else {
            navMenu.classList.add("scale-0");
            hamburger.classList.remove("hamburger-active");
            navMenu.classList.remove("scale-100");
        }
    }
});
