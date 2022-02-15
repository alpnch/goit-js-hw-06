const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingLi = document.querySelector("#ingredients");
const ingredientsList = ingredients.map(ingredient => {
  const ingIt = document.createElement("li");
  ingIt.classList.add("item");
  ingIt.textContent = ingredient;
  return ingIt;
});
  ingLi.append(...ingredientsList);
