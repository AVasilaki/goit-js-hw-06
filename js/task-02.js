const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const list = document.querySelector('#ingredients');

const murkup = ingredients.map(element => {
  const li = document.createElement('li');
  console.log(li);
  li.classList.add('item');
  li.textContent = element;

  return li;
});
list.append(...murkup);
