const contactButton = (function () {
  const navBar = document.querySelector("nav");
  const contactBtn = document.createElement("button");

  contactBtn.classList.add("contact");
  contactBtn.textContent = "Contacts";

  navBar.appendChild(contactBtn);

  contactBtn.addEventListener("click", contactPage);
})();

function contactPage() {
  const content = document.querySelector("#content");
  const mainDiv = document.createElement("div");
  const contactTitle = document.createElement("h1");
  const contactDiv = document.createElement("div");
  const nameDiv = document.createElement("div");
  const telDiv = document.createElement("div");
  const mailDiv = document.createElement("div");

  content.innerHTML = "";

  mainDiv.classList.add("mainDiv");
  contactDiv.classList.add("contactDiv");

  // "Jarms Backburn, 1-162-821-4747, jarms.backburn@protonmail.ca"
  contactTitle.textContent = "Contact Us";

  content.appendChild(mainDiv);
  mainDiv.appendChild(contactTitle);
  mainDiv.appendChild(contactDiv);
}
