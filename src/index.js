import "./main.css";
import "./menu.js";
import "./contact.js";
import './about.js';


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
  const logo = document.createElement('div');
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

  title.textContent = "Welcome to Beef n resto";
  firstHalf.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet officia praesentium quod fugiat explicabo animi ut quaerat ullam. Voluptas sed exercitationem excepturi qui quae quaerat ipsum cumque sunt doloremque velit!'
  secondHalf.textContent = ' Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias odio tenetur fuga dolor quidem recusandae earum temporibus quam cupiditate exercitationem.';

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
