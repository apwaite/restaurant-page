const renderFooter = () => {
  const footer = document.createElement("footer");
  footer.classList.add("footer");
  const madeBy = document.createElement("p");
  madeBy.classList.add("made-by");
  madeBy.textContent = "Made with ❤️ by Andrew";
  const link = document.createElement("a");
  link.href = "https://github.com/apwaite";
  link.target = "_blank";
  madeBy.appendChild(link);
  const span = document.createElement("span");
  span.classList.add("fab", "fa-github");
  link.appendChild(span);
  footer.appendChild(madeBy);
  return footer;
};

export { renderFooter };
