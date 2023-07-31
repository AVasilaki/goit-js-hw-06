const form = document.querySelector('form');
form.addEventListener('submit', handlerSubmit);
function handlerSubmit(evt) {
  evt.preventDefault();

  const {
    elements: { email, password },
  } = evt.currentTarget;

  if (email.value === '' || password.value === '') {
    return alert('Please fill in all the fields!');
  }
  console.log({ email: email.value, Password: password.value });
  evt.currentTarget.reset();
}
