const ROOT_API = "https://www.thecocktaildb.com/api/json/v1/1";

export const getRandomCocktail = async () => {
  const response = await fetch(`${ROOT_API}/random.php`);
  const json = await response.json();

  return json.drinks[0];
};

export const getCategoryDrinks = async (category) => {
  const response = await fetch(`${ROOT_API}/filter.php?c=${category}`);
  const json = await response.json();

  return json.drinks;
};

export const getDrinkInfo = async (drinkId) => {
  const response = await fetch(`${ROOT_API}/lookup.php?i=${drinkId}`);
  const json = await response.json();

  return json.drinks[0];
};

export const getSearchResults = async (search) => {
  const response = await fetch(`${ROOT_API}/search.php?s=${search}`);
  const json = response.json();

  return json;
};
