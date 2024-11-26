import "./styles.css";
import * as pages from "./pages";

const content = document.querySelector("#content");
const homeBtn = document.querySelector(".home-button");
const menuBtn = document.querySelector(".menu-button");
const aboutBtn = document.querySelector(".about-button");

homeBtn.addEventListener("click", () => {
    loadPage(pages.loadHomePage);
});

menuBtn.addEventListener("click", () => {
    loadPage(pages.loadMenuPage);
});

aboutBtn.addEventListener("click", () => {
    loadPage(pages.loadAboutPage)
});

function loadPage(fn){
    content.innerHTML = "";
    fn();
}

pages.loadHomePage();