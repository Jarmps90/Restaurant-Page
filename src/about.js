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
  aboutTitle.classList.add('about-title');
  aboutText.classList.add('aboutText');

  aboutTitle.textContent = 'About Us';
  aboutText.textContent = "Our Been'N resto is more than just a place to eat - it's an experience that will leave you feeling satisfied and refreshed. We pride ourselves on our attention to detail, from the freshest ingredients used in each dish to the welcoming atmosphere we create for all of our guests. Our team works hard to ensure that every customer has a memorable and enjoyable visit with us, and we look forward to seeing you soon!";

  content.appendChild(aboutOuter);
  aboutOuter.appendChild(aboutInner);
  aboutInner.appendChild(aboutTitle);
  aboutInner.appendChild(aboutText);
};
