import "normalize.css";
import { renderHeader } from "./components/header";
import { renderNav } from "./components/nav";
import { renderAbout } from "./components/about";
import { renderMenu } from "./components/menu";
import { renderContact } from "./components/contact";
import { renderFooter } from "./components/footer";

console.log("Connected!");

renderPage();

function createNavEvents() {
  const main = document.querySelector(".main");
  const about = document.querySelector(".about");
  const menu = document.querySelector(".menu");
  const contact = document.querySelector(".contact");
  // const contact = document.querySelector("contact");
  about.addEventListener("click", () => {
    main.removeChild(main.firstChild);
    main.appendChild(renderAbout());
  });
  menu.addEventListener("click", () => {
    main.removeChild(main.firstChild);
    main.appendChild(renderMenu());
  });
  contact.addEventListener("click", () => {
    main.removeChild(main.firstChild);
    main.appendChild(renderContact());
  });
}

function renderPage() {
  const content = document.getElementById("content");
  content.appendChild(renderHeader());
  content.appendChild(renderNav());
  const section = document.createElement("section");
  section.classList.add("main");
  content.appendChild(section);
  section.appendChild(renderAbout());
  content.appendChild(renderFooter());
  createNavEvents();
}
