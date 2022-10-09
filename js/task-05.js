const names = {
    input: document.querySelector("#name-input"),
    output: document.querySelector("#name-output"),
    
};

// const nameInputRef = document.querySelector("#name-input");
// const nameOutputRef = document.querySelector("#name-output");


names.input.addEventListener('input', onInputChange);
function onInputChange(event) {
    console.log('name:', event.currentTarget.value);
    const nam = event.currentTarget.value;
    if (event.currentTarget.value.length === 0) {
        names.output.textContent = 'Anonymous';
    } else {
        names.output.textContent = nam.charAt(0).toUpperCase() + nam.slice(1).toLowerCase();
    }
    
};



