import express, { Router } from "express";
import {
  getById,
  getDrinkList,
  getRandomCocktail,
  getSearchedDrink,
} from "../controllers/cocktail.controller.js";
import { tryCatch } from "../utils/helpers.js";
const router = Router();
router.get("/random", tryCatch(getRandomCocktail));
router.get("/get-list", getDrinkList);
// api/cocktails/search?drinkName=${drinkName}
router.get("/search", tryCatch(getSearchedDrink));
// api/cocktails/get-one-drink?id=${id}
router.get("/get-one-drink", tryCatch(getById));
export default router;
