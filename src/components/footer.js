const renderFooter = () => {
  const footer = document.createElement("footer");
  footer.classList.add("footer");
  footer.textContent = "This is a footer";
  return footer;
};

export { renderFooter };
