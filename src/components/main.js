const renderHome = () => {
  const home = document.createElement("main");
  home.classList.add("main-home");
  const colLeft = document.createElement("section");
  colLeft.classList.add("col-left");
  home.appendChild(colLeft);
  const statement = document.createElement("p");
  statement.classList.add("statement");
  statement.textContent =
    '"At Burger Place we value each and every one of our customers. That\'s why we go above and beyond to craft our traditional gourmet burgers, fries and shakes to create the perfect infusion of flavours that will leave you wanting more."';
  colLeft.appendChild(statement);
  const colRight = document.createElement("section");
  colRight.classList.add("col-right");
  home.appendChild(colRight);

  return home;
};

export { renderHome };
