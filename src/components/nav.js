const renderNav = () => {
  const nav = document.createElement("nav");
  const links = document.createElement("ul");
  links.classList.add("links");
  nav.appendChild(links);
  const home = document.createElement("li");
  home.classList.add("home");
  home.textContent = "Home";
  links.appendChild(home);
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
