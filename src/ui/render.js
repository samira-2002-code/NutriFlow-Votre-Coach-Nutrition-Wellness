export function displayRecipes(recipes) {
  const app = document.getElementById("app");

  app.innerHTML = "<div class='recipes'></div>";
  const container = document.querySelector(".recipes");

  recipes.forEach(recipe => {

    const badgeColor = getBadgeColor(recipe.caloriesPerServing);

    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
      <img src="${recipe.image}" width="150"/>
      <h3>${recipe.name}</h3>
      <p>${recipe.prepTimeMinutes} min</p>

      <span class="badge ${badgeColor}">
        ${recipe.caloriesPerServing} kcal
      </span>
    `;

    container.appendChild(card);
  });
}

function getBadgeColor(calories) {
  if (calories < 400) return "green";
  if (calories <= 800) return "orange";
  return "red";
}