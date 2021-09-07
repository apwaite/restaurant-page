import "normalize.css";
// import { renderHeader } from "./components/header";
// import { renderNav } from "./components/nav";
// import { renderAbout } from "./components/about";
// import { renderMenu } from "./components/menu";
// import { renderContact } from "./components/contact";
// import { renderFooter } from "./components/footer";
import initialRender from "./components/initialRender";

console.log("Connected!");

renderPage();

// function createNavEvents() {
//   const main = document.querySelector(".main");
//   const about = document.querySelector(".about");
//   const menu = document.querySelector(".menu");
//   const contact = document.querySelector(".contact");

//   about.addEventListener("click", () => {
//     main.removeChild(main.firstChild);
//     main.appendChild(renderAbout());
//   });
//   menu.addEventListener("click", () => {
//     main.removeChild(main.firstChild);
//     main.appendChild(renderMenu());
//   });
//   contact.addEventListener("click", () => {
//     main.removeChild(main.firstChild);
//     main.appendChild(renderContact());
//   });
// }

function renderPage() {
  initialRender();
}
