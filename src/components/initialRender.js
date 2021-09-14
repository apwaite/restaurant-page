import { renderHeader } from "./header";
import { renderNav } from "./nav";
import { renderAbout } from "./about";
import { renderMenu } from "./menu";
import { renderContact } from "./contact";
import { renderFooter } from "./footer";

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
