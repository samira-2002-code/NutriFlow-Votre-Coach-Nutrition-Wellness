const BASE_URL = 'https://dummyjson.com/recipes';

export async function getRecipes() {
  try {
    const response = await fetch(BASE_URL);
    const data = await response.json();
    return data.recipes;
  } catch (error) {
    console.error("Erreur API :", error);
    return [];
  }
}