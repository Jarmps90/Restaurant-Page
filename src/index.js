import "./main.css";
import "./menu.js";
import "./contact.js";
import './about.js';
import beefnResto from "./resorces/beef_n_resto_red.png"


const homeButton = (function () {
  const navBar = document.querySelector("nav");
  const homeBtn = document.createElement("button");

  homeBtn.classList.add("home");
  homeBtn.textContent = "Home";

  navBar.appendChild(homeBtn);

  homeBtn.addEventListener("click", generateIndexPage);
})();

function generateIndexPage() {
  const content = document.querySelector("#content");
  const header = document.querySelector('header');

  const logoDiv = document.createElement('div');
  const logo = document.createElement('img');
  const headerText = document.createElement('div');

  const outerContainer = document.createElement('div')
  const innerContainer = document.createElement('div');
  const title = document.createElement("h1");
  const text = document.createElement("div");
  const firstHalf = document.createElement('p');
  const secondHalf = document.createElement('p');



  content.innerHTML = "";

  outerContainer.classList.add('mainOuter');
  innerContainer.classList.add('mainInner');
  title.classList.add("title");
  text.classList.add("text");

  logoDiv.classList.add('logoDiv');
  logo.classList.add('logo');
  headerText.classList.add('headerText')

  headerText.textContent = 'It’s time to enjoy the finer things in life.'
  logo.src = beefnResto;
  title.textContent = "Welcome to Beef n resto";
  firstHalf.textContent = "We are pleased to have you join us for an unforgettable dining experience. Our menu features classic and contemporary cuisine, with something to satisfy every palate."
  secondHalf.textContent = "Whether you're looking for a quick bite or a leisurely meal, we promise that your taste buds will be delighted by our delectable offerings. We look forward to seeing you soon!"

  header.appendChild(logoDiv);
  logoDiv.appendChild(headerText);
  logoDiv.appendChild(logo)

  innerContainer.appendChild(title);
  innerContainer.appendChild(text);
  text.appendChild(firstHalf);
  text.appendChild(secondHalf);
  outerContainer.appendChild(innerContainer);
  content.appendChild(outerContainer);
}

function stickyNav() {
  const nav = document.querySelector('nav');
  const navOffset = nav.offsetTop;

  window.addEventListener('scroll', () => {
    if (window.pageYOffset >= navOffset) {
      nav.classList.add('sticky')
    } else {
      nav.classList.remove('sticky')
    }
  });
};

generateIndexPage();
stickyNav();
