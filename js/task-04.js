const counterValue = document.querySelector('#value');
counterValue.value = 0;
const decBtnRef = document.querySelector('[data-action="decrement"]');
const incBtnRef = document.querySelector('[data-action="increment"]');

decBtnRef.addEventListener('click', () => {

    counterValue.value += Number(decBtnRef.textContent);
    console.log("decrease by", Number(decBtnRef.textContent));

    counterValue.textContent = counterValue.value;
    console.log('Total :', counterValue.value);
});

incBtnRef.addEventListener('click', () => {
    
    counterValue.value += Number(incBtnRef.textContent);
    console.log("increase by", Number(incBtnRef.textContent));

    counterValue.textContent = counterValue.value;
    console.log('Total :', counterValue.value);
});



