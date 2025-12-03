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
  const menuDishes = document.createElement("div");

  title.textContent = "Menu";
  menuDishes.classList.add("dishes");

  content.innerHTML = "";

  content.appendChild(title);
  content.appendChild(menuDishes);
};
