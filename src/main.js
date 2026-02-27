import { getRecipes } from "./api/recipeProvider.js";
import { displayRecipes } from "./ui/render.js";
import { showLoader } from "./ui/loader.js";

async function init() {

 
  showLoader();

 
  const recipes = await getRecipes();

  
  displayRecipes(recipes);
}

init();





















