// JS file for website contains Javascript for the hamburger menu
// Hamburger  and navMenu variable set as a constant as not changing throughout run time and is retrieved by document.querySelector and is retrieving the hamburger class from the HTML document
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");


// Script which activats the hamburger menu
// addEventListener looks for an action performed by a user on a website. In this case, the action is click, so when the hamburger icon is clicked the class active is applied/added to the hamburger class and nav-menu class in HTML
hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active"); 
})

// Script which removes the menu when a nav link has been pressed
// for each nav link an event listener is applied so that when one is clicked the active class is removed from the hamburger and nav-menu class
document.querySelectorAll(".nav-link").forEach(n => n.
    addEventListener("click", () => {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
}))