function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btn = document.querySelector('.change-color');
const color = document.querySelector('span.color');
const body = document.querySelector('body');

btn.addEventListener("click", () => {
  let backGrColor = getRandomHexColor();
  body.style.backgroundColor = backGrColor;
  color.textContent = backGrColor;
})