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
const toTop = document.querySelector("#to-top");
window.addEventListener("click", function (e) {
    if (e.target != navMenu && e.target != hamburger && e.target != toTop) {
        if (navMenu.classList.contains("scale-100")) {
            navMenu.classList.add("scale-0");
            navMenu.classList.remove("scale-100");
            hamburger.classList.remove("hamburger-active");
        }
    }
});

// Dark mode toggle
const html = document.querySelector("html");
const darkToggle = document.querySelector("#dark-toggle");
darkToggle.addEventListener("click", function () {
    darkToggle.checked
        ? html.classList.add("dark")
        : html.classList.remove("dark");
});

// Check dark mode
// On page load or when changing themes, best to add inline in `head` to avoid FOUC
if (
    localStorage.theme === "dark" ||
    (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
    document.documentElement.classList.add("dark");
    darkToggle.checked = true;
} else {
    document.documentElement.classList.remove("dark");
}

// Whenever the user explicitly chooses light mode
localStorage.theme = "light";

// Whenever the user explicitly chooses dark mode
localStorage.theme = "dark";

// Whenever the user explicitly chooses to respect the OS preference
localStorage.removeItem("theme");
