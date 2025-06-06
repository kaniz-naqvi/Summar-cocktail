const url = `http://localhost:3000/api/cocktails`;
export const getRandomCocktail = async () => {
  const data = await fetch(`${url}/random`);
  const randomDrink = await data.json();
  return randomDrink;
};
export const getCocktailList = async () => {
  const data = await fetch(`${url}/get-list`);
  const cocktailList = data.json();
  return cocktailList;
};
export const getSeachedCocktail = async (drinkName) => {
  const data = await fetch(`${url}/search?drinkName=${drinkName}`);
  const cocktailList = data.json();
  return cocktailList;
};
export const getCocktailById = async (id) => {
  const data = await fetch(`${url}/get-one-drink?id=${id}`);
  const cocktail = data.json();
  return cocktail;
};
