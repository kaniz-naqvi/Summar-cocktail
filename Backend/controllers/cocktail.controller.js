import {
  fetchListOfDrinks,
  fetchRandomCocktail,
  getDrinkById,
  searchDrinkName,
} from "../services/cocktail.service.js";

export const getRandomCocktail = async (req, res) => {
  const data = await fetchRandomCocktail();
  res.json(data);
};
export const getDrinkList = async (req, res) => {
  const data = await fetchListOfDrinks();
  res.json(data);
};
export const getSearchedDrink = async (req, res) => {
  const name = req.query.drinkName;
  const data = await searchDrinkName(name);
  res.json(data);
};
export const getById = async (req, res) => {
  const id = req.query.id;
  const data = await getDrinkById(id);
  res.json(data);
};
