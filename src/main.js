import { getRecipes } from "./Api/recipeProvider.js";

getRecipes();

import { displayRecipes } from "./ui/render.js";

async function init() {
  const recipes = await getRecipes();
  displayRecipes(recipes);
}

init(); 
























