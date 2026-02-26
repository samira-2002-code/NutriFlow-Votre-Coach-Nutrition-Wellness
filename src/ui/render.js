export function displayRecipes(recipes) {
  const app = document.getElementById("app");

  app.innerHTML = "<div class='recipes'></div>";
  const container = document.querySelector(".recipes");

  recipes.forEach(recipe => {
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
      <img src="${recipe.image}" width="150"/>
      <h3>${recipe.name}</h3>
      <p>${recipe.prepTimeMinutes} min</p>
    `;

    container.appendChild(card);
  });
}