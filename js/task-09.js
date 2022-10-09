const btnRef = document.querySelector('.change-color');
const styleWindowRef = document.querySelector('body');
const codeColorRef = document.querySelector('.color');


btnRef.addEventListener('click', () => getRandomHexColor());
  
function getRandomHexColor(event) {
  const newColor = "#" + Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)
    .toLowerCase();
  
  console.log('new Background color:', newColor);
  codeColorRef.textContent = newColor;
  styleWindowRef.style.backgroundColor = newColor;
}



