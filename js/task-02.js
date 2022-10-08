const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const itemRef = document.querySelector('#ingredients');
for (let i = 0; i < ingredients.length; i += 1) {
  const elItemRef = document.createElement('li');
  elItemRef.classList.add('item');

  const textItemRef = document.createElement('p');
  textItemRef.textContent = ingredients[i];
  elItemRef.appendChild(textItemRef);
  itemRef.appendChild(elItemRef);
}
  
  // console.log(itemRef);


