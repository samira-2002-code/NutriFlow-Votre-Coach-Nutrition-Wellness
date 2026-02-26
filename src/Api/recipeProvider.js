 const BASE_URL = "https://dummyjson.com/recipes";

export async function getRecipes() {
    try {
        const response = await fetch(BASE_URL);
        const data = await response.json();
        console.log(data);
        return data.recipes;
    } catch (error) {
        console.log("error API", error);
    }
}
