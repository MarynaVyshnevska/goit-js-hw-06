const btnCreateRef = document.querySelector('[data-create]');
const btnDestroyRef = document.querySelector('[data-destroy]');
const amountBoxesRef = document.querySelector('input');
const boxesRef = document.querySelector('#boxes');
const newBoxes = [];

amountBoxesRef.addEventListener('input', totalBoxes);
function totalBoxes(event) {
  return event.currentTarget.value;
}
// console.log(amountBoxesRef);

btnCreateRef.addEventListener('click', createBoxes);

function createBoxes(amount) {
  amount = Number(amountBoxesRef.value);
  for (let i = 0; i < amount; i += 1) {
    const item = document.createElement('div');
    item.classList.add('boxes-new');
    item.style.margin = '10px auto';
    item.style.width = (30 + 10 * i) + "px";
    item.style.height = (30 + 10 * i) + "px";
    item.style.backgroundColor = `${getRandomHexColor()}`;
    
    // console.log(item)
    newBoxes.push(item);
  }

  boxesRef.append(...newBoxes);
  // Щодо 10 завдання також врахуйте, що колекцію елементів потрібно 
  // буде вставляти в розмітку за одну операцію.
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
};
    
btnDestroyRef.addEventListener('click', destroyBoxes);
function destroyBoxes(event) {
  boxesRef.innerHTML = '';
};
