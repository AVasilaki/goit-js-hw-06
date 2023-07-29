const input = document.querySelector('#validation-input');

input.addEventListener('blur', handleValid);
function handleValid(evt) {
  if (evt.currentTarget.value.trim().length === Number(input.dataset.length)) {
    evt.currentTarget.classList.remove('invalid');
    evt.currentTarget.classList.add('valid');
  } else {
    evt.currentTarget.classList.remove('valid');
    evt.currentTarget.classList.add('invalid');
  }
}
