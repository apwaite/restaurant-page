const renderHome = () => {
  const home = document.createElement("main");
  home.classList.add("home");
  home.textContent = "Hi";
  return home;
};

export { renderHome };
