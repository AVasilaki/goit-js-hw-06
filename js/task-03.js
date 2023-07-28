const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];
const list = document.querySelector('ul');

// function createMarkup(images) {
//   const markup = images
//     .map(
//       ({ url, alt }) => `<li>
// <img src="${url}" alt="${alt}"  width="300"/>
//   </li>`
//     )
//     .join('');

//   list.insertAdjacentHTML('beforeend', markup);
//   // console.log(markup);
// }
// createMarkup(images);
list.style.display = 'flex';
list.style.gap = '20px';
list.style.listStyle = 'none';
function createMarkup(arr) {
  const markup = arr
    .map(
      ({ url, alt }) => `<li>
  <img src =${url} alt = ${alt} width='200' height='100'</li>`
    )
    .join('');
  console.log(markup);
  list.insertAdjacentHTML('beforeend', markup);
}

createMarkup(images);
