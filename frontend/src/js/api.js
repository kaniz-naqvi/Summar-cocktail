export const getRandomCocktail = async () => {
  const data = await fetch("http://localhost:3000/api/cocktails/random");
  const randomDrink = await data.json();
  return randomDrink;
};
