
const input = document.querySelector('#name-input');
const output = document.querySelector('#name-output'); 

input.addEventListener('input', event => {
    output.textContent = event.currentTarget.value;
    if (output.textContent === '') {
        output.textContent = 'Anonymous';
    }
});

// const refs = {
//   input: document.querySelector('#name-input'),
//   output: document.querySelector('#name-output'),
// };

// refs.input.addEventListener('input', onInputChange);
// function onInputChange(event) {
//   console.log(event.currentTarget.value);
//     refs.output.textContent = event.currentTarget.value;
// };