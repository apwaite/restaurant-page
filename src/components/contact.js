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
  const openingTimes = document.createElement("h2");
  openingTimes.textContent = "Opening hours";
  details.appendChild(openingTimes);
  const openingTimesWeek = document.createElement("h3");
  openingTimesWeek.textContent = "MON-FRI: 11:00 - 22:00";
  details.appendChild(openingTimesWeek);
  const socialMedia = document.createElement("section");
  socialMedia.classList.add("social-media");
  contact.appendChild(socialMedia);
  const location = document.createElement("section");
  location.classList.add("location");
  contact.appendChild(location);
  return contact;
};

export { renderContact };
