import { getRandomCocktail } from "./api.js";
import { renderHero, renderNav } from "./ui.js";

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
