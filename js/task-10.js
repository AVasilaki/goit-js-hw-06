function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const elements = {
  input: document.querySelector('input'),
  btnCreate: document.querySelector('button[data-create]'),
  btnDestroy: document.querySelector('button[data-destroy]'),
  div: document.querySelector('#boxes'),
};
function createBoxes(amount) {
  const arr = [];
  for (let index = 0; index < amount; index++) {
    const box = document.createElement('div');
    let size = 30 + index * 10;
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = `${getRandomHexColor()}`;
    arr.push(box);
  }
  elements.div.append(...arr);
}

elements.btnCreate.addEventListener('click', handlerNumbers);
function handlerNumbers() {
  const numbers = elements.input.valueAsNumber;

  createBoxes(numbers);
}
elements.btnDestroy.addEventListener('click', handlerDestroy);
function handlerDestroy(evt) {
  elements.div.innerHTML = '';
}
