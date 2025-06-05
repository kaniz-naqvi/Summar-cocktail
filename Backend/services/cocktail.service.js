import axios from "axios";
const cockTail_URL = "https://www.thecocktaildb.com/api/json/v1/1";
const drinkListArray = ["lemon", "mango", "mint", "lemongrass"];
const randomListPfDrinks =
  drinkListArray[Math.floor(Math.random() * drinkListArray.length)];
// get random
export const fetchRandomCocktail = async () => {
  const response = await axios.get(`${cockTail_URL}/random.php`);
  return response.data;
};
// get the list
export const fetchListOfDrinks = async () => {
  const response = await axios.get(
    `${cockTail_URL}/filter.php?i=${randomListPfDrinks}`
  );
  return response.data;
};
// get by search
export const searchDrinkName = async (value) => {
  const response = await axios.get(`${cockTail_URL}/search.php?s=${value}`);
  console.log("url", `${cockTail_URL}/search.php?s=${value}`);
  return response.data;
};
// get by id
export const getDrinkById = async (id) => {
  const response = await axios.get(`${cockTail_URL}/lookup.php?i=${id}`);
  return response.data;
};
