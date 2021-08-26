import Logo from "../assets/bs_logo.svg";

const renderHeader = () => {
  const header = document.createElement("header");
  // header.classList.add("header");
  const img = document.createElement("img");
  img.src = Logo;
  img.alt = "Burger Shot Logo";
  // const h1 = document.createElement("h1");
  // h1.textContent = "Restaurant Page";
  header.appendChild(img);
  return header;
};

export { renderHeader };
