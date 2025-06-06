import {
  getCocktailList,
  getRandomCocktail,
  getSeachedCocktail,
} from "./api.js";
import { renderCocktailList, renderHero, renderNav } from "./ui.js";
//Navbar
const addNav = () => {
  const navbar = document.querySelector("nav");
  if (!navbar) return;
  try {
    renderNav(navbar);
  } catch (err) {
    navbar.innerHTML = ``;
    console.error(err);
  }
};
addNav();
//Home
document.addEventListener("DOMContentLoaded", async () => {
  const hero = document.getElementById("hero");
  if (!hero) return;
  try {
    const data = await getRandomCocktail();
    const randomNumber = Math.floor(Math.random() * 11);

    const drink = data.drinks[randomNumber == 8 ? 0 : randomNumber];
    renderHero(drink, hero);
  } catch (err) {
    hero.innerHTML = `<p class="text-red-500 text-center mt-10">Failed to load cocktail. Try again later.</p>`;
    console.error(err);
  }
});
//____List____
// UI
document.addEventListener("DOMContentLoaded", async () => {
  let query;
  // enter key handler for search submission of nav in list.html(only)
  document.addEventListener("keydown", async (ev) => {
    const target = ev.target;
    if (target && target.id === "searchInput" && ev.key === "Enter") {
      query = target.value.trim();
      if (query) {
        console.log("Search for:", query);
        const searchResult = await getSeachedCocktail(query);
        renderCocktailList(searchResult.drinks);
      }
    }
  });
  const drinksData = await getCocktailList();
  !query && renderCocktailList(drinksData.drinks);
});
