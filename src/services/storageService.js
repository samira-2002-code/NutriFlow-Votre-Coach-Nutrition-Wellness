export function getFavorites() {
  return JSON.parse(localStorage.getItem("favorites")) || [];
}

export function toggleFavorite(recipe) {
  let favorites = getFavorites();

  const exists = favorites.find(r => r.id === recipe.id);

  if (exists) {
    favorites = favorites.filter(r => r.id !== recipe.id);
  } else {
    favorites.push(recipe);
  }

  localStorage.setItem("favorites", JSON.stringify(favorites));
}