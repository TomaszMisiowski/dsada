const categories = document.querySelectorAll("#categories .item");

console.log("Number of categories:  " + categories.length); // odwoływanie po całej

categories.forEach((category) => {
  const globalName = category.querySelector("h2").textContent; // odwoływanie po tekście i kategorii
  console.log("Category:  " + globalName);
  const globalLi = category.querySelectorAll("li"); // odwoływanie po całej tablicy
  console.log("Elements:  " + globalLi.length);
});
