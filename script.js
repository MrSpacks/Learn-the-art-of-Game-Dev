const nav = document.querySelector("nav");
const mobilNav = document.querySelector("nav.mobile_nav");

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
