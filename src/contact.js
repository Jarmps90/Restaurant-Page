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
  nameDiv.classList.add("name");
  telDiv.classList.add("tel");
  mailDiv.classList.add("mail");

  nameDiv.textContent = "Name: Jarms Backburn";
  telDiv.textContent = "Telephone: 1-162-821-4747";
  mailDiv.textContent = "E-mail: jarms.backburn@protonmail.ca";
  contactTitle.textContent = "Contact Us";

  content.appendChild(mainDiv);
  mainDiv.appendChild(contactTitle);
  mainDiv.appendChild(contactDiv);
  contactDiv.appendChild(nameDiv);
  contactDiv.appendChild(telDiv);
  contactDiv.appendChild(mailDiv);
}
