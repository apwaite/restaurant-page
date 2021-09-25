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
  details.classList.add("contact-item", "details");
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
  const phoneNumber = document.createElement("p");
  phoneNumber.textContent = "1-800-123-4567";
  details.appendChild(phoneNumber);

  // Social Media
  const socialMedia = document.createElement("section");
  socialMedia.classList.add("contact-item", "social-media");
  contact.appendChild(socialMedia);
  const socialMediaContainer = document.createElement("div");
  socialMediaContainer.classList.add("sm-links");
  socialMedia.appendChild(socialMediaContainer);
  const socialMediaIcons = document.createElement("p");
  socialMediaIcons.textContent = "TODO: Add social media icons";
  socialMediaContainer.appendChild(socialMediaIcons);

  // Location
  const location = document.createElement("section");
  location.classList.add("contact-item", "location");
  contact.appendChild(location);
  const locationImage = document.createElement("div");
  locationImage.classList.add("location-image");
  location.appendChild(locationImage);
  const image = document.createElement("img");
  image.src = "";
  image.alt = "Burger Place Location";
  locationImage.appendChild(image);
  const locationAddress = document.createElement("div");
  locationAddress.classList.add("location-address");
  location.appendChild(locationAddress);
  const address = document.createElement("h2");
  address.textContent = "Our Address:";
  locationAddress.appendChild(address);
  const streetAddress = document.createElement("h3");
  streetAddress.textContent = "152 N Brand Boulevard";
  locationAddress.appendChild(streetAddress);
  const zipAddress = document.createElement("p");
  zipAddress.textContent = "Glendale, CA 91203";

  return contact;
};

export { renderContact };
