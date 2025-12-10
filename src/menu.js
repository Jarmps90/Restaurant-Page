import beefWellingtonImg from './resorces/loija-nguyen-Lf2dvyS-d2E-unsplash.jpg';
import beefStirFryImg from './resorces/davis-dai-qKPKDb4_W24-unsplash.jpg';

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

  title.classList.add('menu-title');
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
  const beefWellington = new Dish('Beef Wellington', 'Baked steak dish made out of fillet steak and duxelles wrapped in shortcrust pastry', beefWellingtonImg);
  const chineseBeefStirFry = new Dish('Beef Stir Fry', 'This Beef Stir Fry is made with a simple but super flavourful, classic stir fry sauce.', beefStirFryImg);

  dishes.push(beefWellington, chineseBeefStirFry);

  const displayDishes = () => {
    for (let i = 0; i < dishes.length; i++) {
      const menu = document.querySelector('.dishes');
      const menuOuter = document.createElement('div');
      const menuInner = document.createElement('div');
      const title = document.createElement('h2');
      const text = document.createElement('p');
      const img = document.createElement('img');

      title.classList.add('dish-title');
      menuOuter.classList.add('menuOuter');
      menuInner.classList.add('MenuInner');
      img.classList.add('img');
      title.textContent = dishes[i].title;
      text.textContent = dishes[i].text
      img.src = dishes[i].img;

      menuInner.appendChild(title);
      menuInner.appendChild(text);
      menuOuter.appendChild(menuInner);
      menuOuter.appendChild(img);
      menu.appendChild(menuOuter);

    };
  };

  displayDishes();

};
