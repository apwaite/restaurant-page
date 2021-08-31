const renderFooter = () => {
  const footer = document.createElement("footer");
  footer.classList.add("footer");
  footer.textContent = "Made with ❤️ by Andrew";
  return footer;
};

export { renderFooter };
