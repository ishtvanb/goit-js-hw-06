
const body = document.querySelector('body');
const btnColorChange = document.querySelector('button.change-color');
const spanColor = document.querySelector('span.color');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

btnColorChange.addEventListener('click', onBtnClick => {
  const randomColor = getRandomHexColor();
  body.style.backgroundColor = randomColor;
  spanColor.textContent = randomColor;
});

     