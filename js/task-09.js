function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const btn = document.querySelector('.change-color');
btn.addEventListener('click', handlerChangeColor);
function handlerChangeColor(evt) {
  const body = document.querySelector('body');
  const color = document.querySelector('.color');
  body.style.backgroundColor = `${getRandomHexColor()}`;
  color.textContent = `${getRandomHexColor()}`;
}
