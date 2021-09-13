console.log("Loaded contact");

function activeNavLink() {
  const contact = document.querySelector(".contact");
  const currentActive = document.querySelector(".active");
  console.log(currentActive);
  if (currentActive) currentActive.classList.remove("active");
  contact.classList.add("active");
}

const renderContact = () => {
  const contact = document.createElement("main");
  contact.classList.add("main-contact");
  activeNavLink();
  return contact;
};

export { renderContact };
