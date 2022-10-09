const btnCreateRef = document.querySelector('[data-create]');
const btnDestroyRef = document.querySelector('[data-create]');
const amountBoxesRef = document.querySelector('input');
const boxesRef = document.querySelector('#boxes');



function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
// 