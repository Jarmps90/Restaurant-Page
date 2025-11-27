import './main.css';
import './menu.js'



const homeButton = (function() {
    const navBar = document.querySelector('nav');
    const homeBtn = document.createElement('button');

    homeBtn.classList.add('home');
    homeBtn.textContent = 'Home';

    navBar.appendChild(homeBtn);

    homeBtn.addEventListener('click', generateIndexPage);

})();

function generateIndexPage() {
    const content = document.querySelector('#content');
    const titleDiv = document.createElement('h1');
    const textDiv = document.createElement('div');

    content.innerHTML = '';

    titleDiv.classList.add('title');
    textDiv.classList.add('text');

    titleDiv.textContent = 'Welcome to our restaurant page';
    textDiv.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet officia praesentium quod fugiat explicabo animi ut quaerat ullam. Voluptas sed exercitationem excepturi qui quae quaerat ipsum cumque sunt doloremque velit!';

    content.appendChild(titleDiv);
    content.appendChild(textDiv);
};

generateIndexPage();