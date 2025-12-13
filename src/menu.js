
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
  constructor(title, text, price) {
    this.title = title;
    this.text = text;
    this.price = price;
  };
};

function createDish() {
  const dishes = [];
  const beefWellington = new Dish('Beef Wellington', 'Baked steak dish made out of fillet steak and duxelles wrapped in shortcrust pastry', 12);
  const chineseBeefStirFry = new Dish('Beef Stir Fry', 'This Beef Stir Fry is made with a simple but super flavourful, classic stir fry sauce.', 7);
  const chipotleBeefCasserole = new Dish('Chipotle Beef Casserole', 'Discover the bold flavours of this Chipotle Beef Casserole, a hearty dish combining tender beef with smoky chipotle spices.', 9);
  const steakWithRedOnions = new Dish('Sliced Steak with Caramelised Red Onions', 'Are you looking for a new steak and onion dish? This succulent steak, with the sweetness of caramelised red onions, can be on your table in 30 minutes.', 10);
  const grilledStakeWithVegatebles = new Dish('Steak with Grilled Vegetables', 'Discover the rich flavours of a juicy organic steak paired with perfectly grilled vegetables, celebrating the best of Irish organic produce.', 11);

  dishes.push(beefWellington, chineseBeefStirFry, chipotleBeefCasserole, steakWithRedOnions, grilledStakeWithVegatebles);

  const displayDishes = () => {
    for (let i = 0; i < dishes.length; i++) {
      const menu = document.querySelector('.dishes');
      const menuOuter = document.createElement('div');
      const menuInner = document.createElement('div');
      const title = document.createElement('h2');
      const text = document.createElement('p');
      const price = document.createElement('p');


      title.classList.add('dish-title');
      menuOuter.classList.add('menuOuter');
      menuInner.classList.add('menuInner');

      title.textContent = dishes[i].title;
      text.textContent = dishes[i].text;
      price.textContent = `Price: ${dishes[i].price}`;


      menuInner.appendChild(title);
      menuInner.appendChild(text);
      menuInner.appendChild(price);
      menuOuter.appendChild(menuInner);

      menu.appendChild(menuOuter);

    };
  };

  displayDishes();

};
