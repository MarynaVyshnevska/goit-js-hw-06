const formLog = document.querySelector('.login-form');

formLog.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();

    const {
        elements: { email, password },
    } = event.currentTarget;

    if (email.value === '' || password.value === '') {
        alert('Please, fill this form correctly')    
    } else {
        const formData = {
            email: email.value,
            password: password.value,
        };
        console.log(formData);
    }

    event.currentTarget.reset();
}





// function onFormSubmit(event) {
//     event.preventDefault();
//     //  console.log('do not reload');
    
//     const formElem = event.currentTarget.elements;
//     console.log(formElem);
//     const mail = formElem.email.value;
//     const password = formElem.password.value;
    
//     const formData = {
//         mail,
//         password,
//     };

//     console.log(formData);
// }

// function onFormSubmit(event) {
//     event.preventDefault();

//     const formData = new FormData(event.currentTarget);
//     // console.log(formData);

//     formData.forEach((value, name) => {
//         // console.log('onFormSubmit -> value', value);
//         // console.log('onFormSubmit -> name', name);
//         console.log(name, ": ", value);
//     });

    
// }