const renderHeader = () => {
  const header = document.createElement("header");
  const logo = document.createElement("img");
  logo.classList.add("logo");
  logo.src = "assets/bp-logo.png";
  logo.alt = "Burger Place Logo";
  header.appendChild(logo);
  const h1 = document.createElement("h1");
  h1.textContent = "BURGER PLACE";
  header.appendChild(h1);
  return header;
};

export { renderHeader };
