const renderFooter = () => {
  const footer = document.createElement("footer");
  footer.classList.add("footer");
  const p1 = document.createElement("p");
  p1.classList.add("made-by");
  p1.textContent = "Made with ❤️ by Andrew";
  footer.appendChild(p1);
  return footer;
};

export { renderFooter };
