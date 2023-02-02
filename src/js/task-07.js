const inputSizeControl = document.querySelector('input#font-size-control');
const spanText = document.querySelector('span#text');

inputSizeControl.addEventListener('input', event => {
    spanText.style.fontSize = `${event.currentTarget.value}px`;
    
});


 

