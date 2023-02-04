const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const allIngredients = document.querySelector("ul#ingredients");

const itemsAll = ingredients.map((element) => {
  console.log(element);
  const itemEl = document.createElement('li');
  console.log(itemEl);
  itemEl.classList.add('item');
  itemEl.textContent = element;
  return itemEl;
});

  allIngredients.append(...itemsAll);
   



