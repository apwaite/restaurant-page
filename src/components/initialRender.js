import { renderHeader } from "./header";
import { renderNav } from "./nav";
import { renderAbout } from "./about";
import { renderMenu } from "./menu";
import { renderContact } from "./contact";
import { renderFooter } from "./footer";

function activeNavLink(el) {
  const about = document.querySelector(".about");
  const menu = document.querySelector(".menu");
  const contact = document.querySelector(".contact");
  const selectActive = document.querySelector(".active");
  if (!selectActive) {
    about.classList.add("active");
  } else if ((el === "menu") {
    selectActive.classList.remove("active");
    menu.classList.add("active");
  } else if ((el === "contact" ) {
    selectActive.classList.remove("active");
    contact.classList.add("active");
  }
}

function createNavEvents() {
  const main = document.querySelector(".main");
  const about = document.querySelector(".about");
  const menu = document.querySelector(".menu");
  const contact = document.querySelector(".contact");

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

function initialRender() {
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

export default initialRender;
