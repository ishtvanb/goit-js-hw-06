
const inputBtn = document.querySelector('#controls>input');
const createBtn = document.querySelector('btn[data-create]');
const destroyBtn = document.querySelector('btn[data-destroy]');
const boxes = document.querySelector('#boxes');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}
const createBoxes = (amount) => {
  const arrayBoxes = [];

  for (let i = 1; i <= 100; i += 1) {
    const box = document.createElement('div');

    div.style.height = `${i * 30 + 10}px`;
    div.style.width = `${i * 30 + 10}px`;
    div.style.background = `${getRandomHexColor()}`;
    arrayBoxes.push(div);
  }
  return arrayBoxes;
}; 
const destroyBoxes = () => {
  boxes.innerHTML = '';
};
createBtn.addEventListener('click', () => {
  let boxesToAdd = createBoxes(inputBtn.value);
  boxes.append(...boxesToAdd);
});
destroyBtn.addEventListener('click', () => {
  destroyBoxes();
});

 