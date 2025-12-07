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
  const titleDiv = document.createElement("h1");
  const textDiv = document.createElement("div");
  const firstHalf = document.createElement('p');
  const secondHalf = document.createElement('p');
  const logoDiv = document.createElement('div');
  const logo = document.createElement('div');
  const headerText = document.createElement('div');
  content.innerHTML = "";

  titleDiv.classList.add("title");
  textDiv.classList.add("text");
  logoDiv.classList.add('logoDiv');
  logo.classList.add('logo');
  headerText.classList.add('headerText')

  headerText.textContent = 'It’s time to enjoy the finer things in life.'
  titleDiv.textContent = "Welcome to Beef n resto";
  firstHalf.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet officia praesentium quod fugiat explicabo animi ut quaerat ullam. Voluptas sed exercitationem excepturi qui quae quaerat ipsum cumque sunt doloremque velit!'
  secondHalf.textContent = ' Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias odio tenetur fuga dolor quidem recusandae earum temporibus quam cupiditate exercitationem.';

  header.appendChild(logoDiv);
  logoDiv.appendChild(headerText);
  logoDiv.appendChild(logo)
  content.appendChild(titleDiv);
  content.appendChild(textDiv);
  textDiv.appendChild(firstHalf);
  textDiv.appendChild(secondHalf);
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
