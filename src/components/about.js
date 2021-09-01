const renderAbout = () => {
  const about = document.createElement("main");
  about.classList.add("main-about");
  const con0 = document.createElement("section");
  con0.classList.add("con-0");
  about.appendChild(con0);
  const con1 = document.createElement("section");
  con1.classList.add("con-1");
  about.appendChild(con1);
  const statement = document.createElement("p");
  statement.classList.add("statement");
  statement.textContent =
    '"At Burger Place we value each and every one of our customers. That\'s why we go above and beyond when crafting our traditional gourmet burgers, fries and shakes in order to create the perfect infusion of flavours that will leave you wanting more."';
  con1.appendChild(statement);
  return about;
};

export { renderAbout };
