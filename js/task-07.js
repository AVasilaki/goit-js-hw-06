const input = document.querySelector('#font-size-control');
console.log(input);
input.addEventListener('input', handleFontResize);
function handleFontResize(evt) {
  const fontSize = document.querySelector('#text');

  fontSize.style.fontSize = `${input.value}px`;
}
