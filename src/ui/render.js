let total = 0;

export function displayRecipes(recipes) {
  const app = document.getElementById("app");

  app.innerHTML = `
    <h2>Total Calories : <span id="total">${total}</span></h2>
    <input type="text" id="search" placeholder="Searching for a recipe..." />
    <div class="recipes"></div>
  `;

  const container = document.querySelector(".recipes");

  recipes.forEach((recipe) => {
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

      <button class="add-btn">+ Ajouter</button>
    `;

    card.querySelector(".add-btn").addEventListener("click", (e) => {
      e.stopPropagation();
      total += recipe.caloriesPerServing;
      document.getElementById("total").textContent = total;
    });

  
    card.addEventListener("click", () => {
      openModal(recipe);
    });

    container.appendChild(card);
  });
}

function getBadgeColor(calories) {
  if (calories < 400) return "green";
  if (calories <= 800) return "orange";
  return "red";
}

function openModal(recipe) {
  const modal = document.createElement("div");
  modal.classList.add("modal");

  modal.innerHTML = `
    <div class="modal-content">
      <h2>${recipe.name}</h2>

      <h4>Ingredients :</h4>
      <ul>
        ${recipe.ingredients.map((item) => `<li>${item}</li>`).join("")}
      </ul>

      <h4>Instructions :</h4>
      <p>${recipe.instructions}</p>

      <button class="close-btn">Fermer</button>
    </div>
  `;

  document.body.appendChild(modal);

  modal.querySelector(".close-btn").addEventListener("click", () => {
    modal.remove();
  });
};