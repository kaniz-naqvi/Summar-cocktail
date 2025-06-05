import express, { Router } from "express";
import {
  getById,
  getDrinkList,
  getRandomCocktail,
  getSearchedDrink,
} from "../controllers/cocktail.controller.js";
const router = Router();
router.get("/random", getRandomCocktail);
router.get("/get-list", getDrinkList);
// api/cocktails/search?drinkName=${drinkName}
router.get("/search", getSearchedDrink);
// api/cocktails/get-one-drink?id=${id}
router.get("/get-one-drink", getById);
export default router;
