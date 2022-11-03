const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = document.querySelector("#ingredients");

const newItems = ingredients.map(element => {
  const makeIngredient = document.createElement("li");
  makeIngredient.textContent = element;
  makeIngredient.classList.add("item");

  return makeIngredient;
});

ingredientsList.append(...newItems);