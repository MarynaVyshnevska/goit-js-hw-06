const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const itemRef = document.querySelector('#ingredients');

const items = [];
for (let i = 0; i < ingredients.length; i += 1) {
  const el = document.createElement('li');
  el.classList.add('item');
  const textEl = document.createElement('p');
  textEl.textContent = ingredients[i];
  el.appendChild(textEl);
  // console.log(textEl);
  // console.log(el);
  items.push(el);
}
// console.log(items);
itemRef.append(...items);






// for (let i = 0; i < ingredients.length; i += 1) {
//   const elItemRef = document.createElement('li');
//   elItemRef.classList.add('item');

//   const textItemRef = document.createElement('p');
//   textItemRef.textContent = ingredients[i];
//   elItemRef.appendChild(textItemRef);
//   itemRef.appendChild(elItemRef);
// }
  
  // console.log(itemRef);


