const elements = {
  input: document.querySelector('#name-input'),
  title: document.querySelector('#name-output'),
};
// console.log(elements.input, elements.title);
elements.input.addEventListener('input', event => {
  elements.title.textContent = event.currentTarget.value.trim();
  if (event.currentTarget.value.trim() === '') {
    elements.title.textContent = 'Anonymous';
  }
});
// console.log(elements);
