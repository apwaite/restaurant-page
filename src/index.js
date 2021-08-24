import "./css/style.css";
import "normalize.css";
import { renderHeader } from "./components/header";
import { renderNav } from "./components/nav";
import { renderHome } from "./components/main";
import { renderFooter } from "./components/footer";

renderPage();

console.log("I'm working!");

console.log("I'm still working");

function renderPage() {
  const content = document.getElementById("content");
  content.appendChild(renderHeader());
  content.appendChild(renderNav());
  const section = document.createElement("section");
  content.appendChild(section);
  section.appendChild(renderHome());
  content.appendChild(renderFooter());
}
