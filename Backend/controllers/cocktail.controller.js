import {
  fetchListOfCocktail,
  fetchRandomCocktail,
  getCocktailById,
  searchCocktailName,
} from "../services/cocktail.service.js";

export const getRandomCocktail = async (req, res) => {
  const data = await fetchRandomCocktail();
  res.json(data);
};
export const getCocktailList = async (req, res) => {
  const data = await fetchListOfCocktail();
  res.json(data);
};
export const getSearchedCocktail = async (req, res) => {
  const name = req.query.drinkName;
  const data = await searchCocktailName(name);
  res.json(data);
};
export const getById = async (req, res) => {
  const id = req.query.id;
  const data = await getCocktailById(id);
  res.json(data);
};
