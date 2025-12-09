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
  const aboutOuter = document.createElement('div');
  const aboutInner = document.createElement('div');
  const aboutTitle = document.createElement('h1');
  const aboutText = document.createElement('div');

  content.innerHTML = '';
  aboutOuter.classList.add('aboutOuter');
  aboutInner.classList.add('aboutInner');
  aboutTitle.classList.add('aboutTitle');
  aboutText.classList.add('aboutText');

  aboutTitle.textContent = 'About Us';
  aboutText.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, ullam!'


  content.appendChild(aboutOuter);
  aboutOuter.appendChild(aboutInner);
  aboutInner.appendChild(aboutTitle);
  aboutInner.appendChild(aboutText);
};
