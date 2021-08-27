import "./css/style.css";
import "normalize.css";
import { renderHeader } from "./components/header";
import { renderNav } from "./components/nav";
import { renderHome } from "./components/main";
import { renderFooter } from "./components/footer";

console.log("Connected!");

renderPage();

function renderPage() {
  const content = document.getElementById("content");
  content.appendChild(renderHeader());
  content.appendChild(renderNav());
  const section = document.createElement("section");
  section.classList.add("main");
  content.appendChild(section);
  section.appendChild(renderHome());
  content.appendChild(renderFooter());
}
