const aboutButton = (function () {
  const navBar = document.querySelector("nav");
  const aboutBtn = document.createElement("button");

  aboutBtn.classList.add('about');
  aboutBtn.textContent = 'About';

  navBar.appendChild(aboutBtn);

  aboutBtn.addEventListener('click', aboutPage);
})();


function aboutPage() {
  const content = document.querySelector('#content');
  const aboutDiv = document.createElement('div');
  const aboutTitle = document.createElement('h1');
  const aboutText = document.createElement('div');

  content.innerHTML = '';
  aboutDiv.classList.add('aboutDiv');
  aboutTitle.classList.add('aboutTitle');
  aboutText.classList.add('aboutText');

  aboutTitle.textContent = 'About Us';
  aboutText.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, ullam!'


  content.appendChild(aboutDiv);
  aboutDiv.appendChild(aboutTitle);
  aboutDiv.appendChild(aboutText);
};
