const renderNav = () => {
  const nav = document.createElement("nav");
  const links = document.createElement("ul");
  links.classList.add("links");
  nav.appendChild(links);
  const about = document.createElement("li");
  about.classList.add("about");
  about.textContent = "About";
  links.appendChild(about);
  const menu = document.createElement("li");
  menu.classList.add("menu");
  menu.textContent = "Menu";
  links.appendChild(menu);
  const contact = document.createElement("li");
  contact.classList.add("contact");
  contact.textContent = "Contact";
  links.appendChild(contact);
  return nav;
};

export { renderNav };
