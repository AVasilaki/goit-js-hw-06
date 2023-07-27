const numberOfCategories = document.querySelector('#categories');
console.log(`Numbers of categories : ${numberOfCategories.children.length}`);
const categories = document.querySelectorAll('.item');
// console.log(categories);
categories.forEach(function (number) {
  console.log(`Category : ${number.firstElementChild.textContent}`);
  console.log(`Elements : ${number.lastElementChild.children.length}`);
});
