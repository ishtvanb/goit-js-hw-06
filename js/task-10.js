
const inputBtn = document.querySelector('#controls>input');
const createBtn = document.querySelector('button[data-create]');
const destroyBtn = document.querySelector('button[data-destroy]');
const boxes = document.querySelector('#boxes');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

createBtn.addEventListener('click', createBoxes);
function createBoxes() {
  const arrayBoxes = [];

  for (let i = 0; i < 100; i += 1) {

    const div = document.createElement('div');

    div.style.height = `${i * 30 + 10}px`;
    div.style.width = `${i * 30 + 10}px`;
    div.style.background = `${getRandomHexColor()}`;
    arrayBoxes.push(div);
  }
  return boxes.append(...arrayBoxes);
};

const destroyBoxes = () => {
  boxes.innerHTML = '';
};

destroyBtn.addEventListener('click', () => {
  destroyBoxes();
});

 