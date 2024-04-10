const nav = document.querySelector("nav");
const mobilNav = document.querySelector("nav.mobile_nav");
const menuIcon = document.querySelector("#menu_open")
const closeIcon = document.querySelector("#menu_close")
const mobileMenuConteiner = document.querySelector(".mobile_menu_conteiner")

// scroll for fixed menu desktop and tablet version
window.addEventListener("scroll", () => {
        if (window.scrollY > 60) {
            nav.classList.add("scrolled");
            mobilNav.classList.add("scrolled");
            console.log("add class");
        } else {
            nav.classList.remove("scrolled");
            mobilNav.classList.remove("scrolled");
            console.log("remove class");

        }
});
//  menu for mobile version
menuIcon.addEventListener("click", () => {
    mobileMenuConteiner.classList.add("active")
});
closeIcon.addEventListener("click", () => {
    mobileMenuConteiner.classList.remove("active")
});