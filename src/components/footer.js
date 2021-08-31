const renderFooter = () => {
  const footer = document.createElement("footer");
  footer.classList.add("footer");
  const p = document.createElement("p");
  p.classList.add("made-by");
  p.textContent = "Made with ❤️ by Andrew";
  const link = document.createElement("a");
  link.href = "https://github.com/apwaite";
  link.target = "_blank";
  p.appendChild(link);
  const span = document.createElement("span");
  span.classList.add("fab", "fa-github");
  link.appendChild(span);
  footer.appendChild(p);
  return footer;
};

export { renderFooter };
