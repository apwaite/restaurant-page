const renderHeader = () => {
  const header = document.createElement("header");
  // header.classList.add("header");
  const h1 = document.createElement("h1");
  h1.textContent = "Burger Place";
  header.appendChild(h1);
  return header;
};

export { renderHeader };
