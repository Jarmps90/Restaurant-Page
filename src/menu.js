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
  createDish();
};

class Dish {
  constructor(title, text, img) {
    this.title = title;
    this.text = text;
    this.img = img;
  };
};

function createDish() {
  const dishes = [];
  const beefWellington = new Dish('Beef Wellington', 'Baked steak dish made out of fillet steak and duxelles wrapped in shortcrust pastry', 'img');
  const chineseBeefStirFry = new Dish('Chinese Beef Stir Fry', 'This Beef Stir Fry is made with a simple but super flavourful, classic Chinese stir fry sauce.', 'img');

  dishes.push(beefWellington, chineseBeefStirFry);

  const displayDishes = () => {
    for (let i = 0; i < dishes.length; i++) {
      const menu = document.querySelector('.dishes');
      const outerDiv = document.createElement('div');
      const innerDiv = document.createElement('div');
      const title = document.createElement('h2');
      const text = document.createElement('p');
      const img = document.createElement('div');

      outerDiv.classList.add('outer');
      innerDiv.classList.add('inner');
      title.textContent = dishes[i].title;
      text.textContent = dishes[i].text

      innerDiv.appendChild(title);
      innerDiv.appendChild(text);
      outerDiv.appendChild(innerDiv);
      outerDiv.appendChild(img);
      menu.appendChild(outerDiv);

    };
  };

  displayDishes();

};
