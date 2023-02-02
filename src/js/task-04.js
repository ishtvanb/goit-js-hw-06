const counterValue = document.querySelector('counter');
let value = 0;

const refs = {
  decrementBtn: document.querySelector('[data-action="decrement"]'),
  incrementBtn: document.querySelector('[data-action="increment"]'),
};

refs.decrementBtn.addEventListener('click', onDecrementBtn);
refs.incrementBtn.addEventListener('click', onIncrementBtn);

function onDecrementBtn() {
  counterValue - 1;
  console.log(value);
}

function onIncrementBtn() {
  counterValue + 1;
  console.log(value);
}



