const renderFooter = () => {
  const footer = document.createElement("footer");
  footer.classList.add("footer");
  const p1 = document.createElement("p");
  p1.classList.add("made-by");
  p1.textContent = "Made with ❤️ by Andrew";
  const link = document.createElement("a");
  link.href = "https://github.com/apwaite";
  link.target = "_blank";
  p1.appendChild(link);
  footer.appendChild(p1);
  return footer;
};

export { renderFooter };
