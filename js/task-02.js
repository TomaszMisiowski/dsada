const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const ulIngredients = document.querySelector("#ingredients");
console.log(ulIngredients);
ingredients.forEach((ingredient) => {
  //stworzenie pętli i dodanie klas
  const li = document.createElement("li");
  li.textContent = ingredient;
  li.classList.add("item");
  ulIngredients.append(li);
});
