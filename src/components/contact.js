import { renderAbout } from "./about";

console.log("Loaded contact");

function activeNavLink() {
  const contact = document.querySelector(".contact");
  const currentActive = document.querySelector(".active");
  if (currentActive) currentActive.classList.remove("active");
  contact.classList.add("active");
}

const renderContact = () => {
  const contact = document.createElement("main");
  contact.classList.add("main-contact");
  activeNavLink();
  const details = document.createElement("section");
  details.classList.add("details");
  contact.appendChild(details);
  return contact;
};

export { renderContact };
