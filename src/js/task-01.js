
const categoriesAmount =
    document.querySelectorAll('.item');
console.log('categoriesAmount: ', categoriesAmount.length);

categoriesAmount.forEach((item) => {
  console.log('Category:', item.querySelector('h2').textContent);
  console.log('Elements:', item.querySelectorAll('li').length);
});

