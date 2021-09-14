function activeNavLink() {
  const about = document.querySelector(".about");
  const currentActive = document.querySelector(".active");
  console.log("Before remove:");
  console.log(currentActive);
  if (currentActive) currentActive.classList.remove("active");
  console.log("After remove:");
  console.log(currentActive);
  about.classList.add("active");
}

const renderAbout = () => {
  const about = document.createElement("main");
  about.classList.add("main-about");
  const mission = document.createElement("section");
  mission.classList.add("mission");
  about.appendChild(mission);
  const inner1 = document.createElement("div");
  inner1.classList.add("inner-1");
  mission.appendChild(inner1);
  const img = document.createElement("img");
  img.classList.add("chef");
  img.src = "../../dist/assets/chef.jpg";
  img.alt = "Image of chef";
  inner1.appendChild(img);
  const inner2 = document.createElement("div");
  inner2.classList.add("inner-2");
  mission.appendChild(inner2);
  const statement = document.createElement("p");
  statement.classList.add("statement");
  statement.textContent =
    '"At Burger Place we value each and every one of our customers. That\'s why we go above and beyond when crafting our traditional gourmet burgers, fries and shakes in order to create the perfect infusion of flavours that will leave you wanting more."';
  inner2.appendChild(statement);
  const images = document.createElement("section");
  images.classList.add("images");
  about.appendChild(images);
  activeNavLink();
  return about;
};

export { renderAbout };
