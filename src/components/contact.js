console.log("Loaded contact");

const renderContact = () => {
  const contact = document.createElement("main");
  contact.classList.add("main-contact");
  return contact;
};

export { renderContact };
