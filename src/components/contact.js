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

  // Details
  const details = document.createElement("section");
  details.classList.add("details");
  contact.appendChild(details);

  const openingTimes = document.createElement("h2");
  openingTimes.textContent = "Opening Times:";
  details.appendChild(openingTimes);

  const openingTimesWeek = document.createElement("h3");
  openingTimesWeek.textContent = "MON-FRI: 11:00 - 22:00";
  details.appendChild(openingTimesWeek);

  const openingTimesWeekend = document.createElement("h3");
  openingTimesWeekend.textContent = "SAT-SUN: 13:00 - 23:00";
  details.appendChild(openingTimesWeekend);

  // Social Media
  const socialMedia = document.createElement("section");
  socialMedia.classList.add("social-media");
  contact.appendChild(socialMedia);

  const socialMediaContainer = document.createElement("div");
  socialMediaContainer.classList.add("sm-links");
  socialMedia.appendChild(socialMediaContainer);

  const socialMediaIcons = document.createElement("p");
  socialMediaIcons.textContent = "TODO: Add social media icons";
  socialMediaContainer.appendChild(socialMediaIcons);

  // Location
  const location = document.createElement("section");
  location.classList.add("location");
  contact.appendChild(location);

  const locationContainer1 = document.createElement("div");
  locationContainer1.classList.add("loc-1");
  location.appendChild(locationContainer1);

  const locationContainer2 = document.createElement("div");
  locationContainer2.classList.add("loc-2");
  location.appendChild(locationContainer2);

  return contact;
};

export { renderContact };
