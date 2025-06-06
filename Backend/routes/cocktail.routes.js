import express, { Router } from "express";
import {
  getById,
  getCocktailList,
  getRandomCocktail,
  getSearchedCocktail,
} from "../controllers/cocktail.controller.js";
import { tryCatch } from "../utils/helpers.js";
const router = Router();
router.get("/random", tryCatch(getRandomCocktail));
router.get("/get-list", tryCatch(getCocktailList));
// api/cocktails/search?drinkName=${drinkName}
router.get("/search", tryCatch(getSearchedCocktail));
// api/cocktails/get-one-drink?id=${id}
router.get("/get-one-drink", tryCatch(getById));
export default router;
