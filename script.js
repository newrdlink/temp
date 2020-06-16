function createParagraph() {
  let para = document.createElement("p");
  para.textContent = "You clicked the button!";
  document.body.appendChild(para);
  para.setAttribute(color, "white");
}

const buttons = document.querySelectorAll("button");

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", createParagraph);
}
