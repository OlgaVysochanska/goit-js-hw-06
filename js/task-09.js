function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const changing = document.querySelector(".change-color");
const colorValue = document.querySelector(".color");

changing.addEventListener("click", onClick);

function onClick(event) {
  document.body.style.backgroundColor = getRandomHexColor();
  colorValue.textContent = document.body.style.backgroundColor;
}