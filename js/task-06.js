const inputRef = document.querySelector('input');
const lengthRef = inputRef.dataset.length; 

console.log(inputRef);
console.log(lengthRef);


inputRef.addEventListener('blur', onBlurInput);

function onBlurInput(event) {
    console.log(event.target.value, event.target.value.length);

    if (event.target.value.length == lengthRef) {
        inputRef.classList.add('valid');
    } else {
        inputRef.classList.add('invalid');
    }
}



