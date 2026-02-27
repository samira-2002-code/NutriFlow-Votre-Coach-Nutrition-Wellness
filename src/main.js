import { getRecipes } from "./api/recipeProvider.js";
import { displayRecipes } from "./ui/render.js";
import { showLoader } from "./ui/loader.js";

async function init() {

 
  showLoader();

 
  const recipes = await getRecipes();

  
  displayRecipes(recipes);
  const searchInput=document.getElementById("search");
  searchInput.addEventListener("input",(e)=>{
    const value =e.target.value.tolowerCase();
    const filtered =recipes.filter(recipe=>recipe.name.tolowerCase().includes(value));
    displayRecipes(filtered) ;
    
    
  });
}

init();





















