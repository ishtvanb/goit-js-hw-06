 
const input = document.querySelector('#validation-input');

input.addEventListener('blur', event => {
const inputValue = event.target.value.length;
const inputLength = event.target.dataset.length;
    if (inputValue === Number(inputLength)) {
        input.classList.remove('invalid');
        input.classList.add('valid');
    } else {
        input.classList.remove('valid');
        input.classList.add('invalid');
    }
});


 