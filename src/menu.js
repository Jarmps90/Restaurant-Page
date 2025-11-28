const menuButton = (function () {
  const navBar = document.querySelector("nav");
  const menuBtn = document.createElement("button");

  menuBtn.classList.add("menu");
  menuBtn.textContent = "Menu";

  navBar.appendChild(menuBtn);

  menuBtn.addEventListener("click", menuPage);
})();

function menuPage() {
  const content = document.querySelector("#content");
  const title = document.createElement("h1");
  const menuSides = document.createElement("div");
  const sidesTitle = document.createElement("h2");

  title.classList.add("title");
  title.textContent = "Menu";
  menuSides.classList.add("sides");
  sidesTitle.textContent = "Side dishes";

  content.innerHTML = "";

  content.appendChild(title);
  content.appendChild(menuSides);
  menuSides.appendChild(sidesTitle);
}
