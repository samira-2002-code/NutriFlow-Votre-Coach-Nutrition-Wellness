export function displayRecipes(recipes) {
    const app = document.getElementById("app");

    app.innerHTML = "<div class='recipes'></div>";
    const container = document.querySelector(".recipes");
    app.innerHTML=`<input type="text" id="search" placeholpder="Searching for a recipe..."/>
    <div class="recipies"></div>`;

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
    `;

        container.appendChild(card);

        card.addEventListener("click", () => {
            openModal(recipe);
        });
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
    modal.innerHTML = `<div class="modal-content">
  <h2<${recipe.name}</h2>
  <h4>Ingredients :</h4>
  <ul> ${recipoe.Ingredients.map((item) => `<li>${item}</li>.join("")`)}
   </ul>
     <h4>Instructions :</h4>
     <p>${recipe.Instructions}     </p>
     <button class="close-btn">Fermer</button>
     </div>`;
     document.body.appendChild(modal);
     modal.querySelector(".close-btn").addEventListener("click",()=>{
      modal.remove();
     });
}
