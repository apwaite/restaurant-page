console.log("Loaded menu");

function activeNavLink() {
  const menu = document.querySelector(".menu");
  const currentActive = document.querySelector(".active");
  console.log(currentActive);
  if (currentActive) currentActive.classList.remove("active");
  menu.classList.add("active");
}

const newMenuItem = (src, alt, name, cost) => {
  const menuItem = document.createElement("div");
  menuItem.classList.add("menu-item");
  const img = document.createElement("img");
  img.src = src;
  img.alt = alt;
  const itemInfo = document.createElement("div");
  itemInfo.classList.add("info");
  const itemName = document.createElement("h2");
  itemName.textContent = name;
  const itemCost = document.createElement("h3");
  itemCost.textContent = cost;
  itemInfo.appendChild(itemName);
  itemInfo.appendChild(itemCost);
  menuItem.appendChild(img);
  menuItem.appendChild(itemInfo);
  return menuItem;
};

const renderMenu = () => {
  const menu = document.createElement("main");
  menu.classList.add("main-menu");
  activeNavLink();
  const menuItems = [
    newMenuItem(
      "../../dist/assets/bacon-cheese.jpg",
      "Bacon Cheeseburger",
      "Bacon Cheeseburger",
      "$12.99"
    ),
    newMenuItem(
      "../../dist/assets/bacon-double-cheese.jpg",
      "Bacon Double Cheeseburger",
      "Bacon Double Cheeseburger",
      "$8.99"
    ),
    newMenuItem(
      "../../dist/assets/crispy-chicken.jpg",
      "Crispy Chicken Burger",
      "Crispy Chicken Burger",
      "$10.99"
    ),
    newMenuItem(
      "../../dist/assets/ice-cold-soda.jpg",
      "Ice Cold Soda",
      "Ice Cold Soda",
      "Small: $1.99, Medium: $2.99, Large: $3.99"
    ),
    newMenuItem(
      "../../dist/assets/milkshake.jpg",
      "Milkshake",
      "Milkshake",
      "Small: $3.99, Medium: $5.99, Large: £7.99)"
    ),
  ];

  menuItems.map((item) => {
    menu.appendChild(item);
  });
  return menu;
};

export { renderMenu };
