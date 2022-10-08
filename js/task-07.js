const textRef = document.querySelector('span');
const inputRef = document.querySelector('input');
// console.log(textRef);
// console.dir(inputRef);

inputRef.addEventListener('input', onInputSize);

function onInputSize(event) {
    console.log('font-size must be', event.target.value);
    textRef.style.fontSize = event.target.value + 'px';
};

// Трохи змінила текст тому що це є магія))))