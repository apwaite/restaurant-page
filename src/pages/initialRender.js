function renderHeader() {
  const header = document.createElement("header");
  // header.classList.add("header");
  const h1 = document.createElement("h1");
  h1.textContent = "Restaurant Page";
  header.appendChild(h1);
  return header;
}

// function renderNav() {
//   const nav = document.createElement("nav");
// }

function renderContent() {
  // select content id
  const element = document.getElementById("content");
  // header content
  const header = renderHeader();
  element.appendChild(header);
  // nav content
}

export default renderContent;
