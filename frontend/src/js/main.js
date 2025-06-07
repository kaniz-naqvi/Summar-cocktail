import {
  getCocktailById,
  getCocktailList,
  getRandomCocktail,
  getSeachedCocktail,
} from "./api.js";
import {
  renderCocktailList,
  renderDrinkDetails,
  renderHero,
  renderNav,
} from "./ui.js";
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
const localStorageFavs = JSON.parse(localStorage.getItem("favAddedIds")) || [];
// UI
const parent = document.getElementById("cocktail-list");
const favList = document.getElementById("favs");
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
        renderCocktailList(searchResult.drinks, localStorageFavs, parent);
      }
    }
  });
  if (parent) {
    const drinksData = await getCocktailList();
    !query && renderCocktailList(drinksData.drinks, localStorageFavs, parent);
  } else {
    const drinksData = await Promise.all(
      localStorageFavs.map(async (element) => {
        const res = await getCocktailById(element);
        return res.drinks[0];
      })
    );
    renderCocktailList(drinksData, localStorageFavs, favList);
  }
});
// Detail
const clickableElement = parent || favList;
clickableElement.addEventListener("click", (e) => {
  const favClick = e.target.closest(".heart-btn");
  const clickedCard = e.target.closest(".listContainer");

  if (favClick && clickedCard) {
    e.stopPropagation();
    const heartIcon = favClick.querySelector("i");
    // Toggle icon class
    heartIcon.classList.toggle("ri-heart-fill");
    heartIcon.classList.toggle("ri-heart-line");
    // Handle localStorage
    const existing = JSON.parse(localStorage.getItem("favAddedIds")) || [];
    const id = clickedCard.id;
    if (!existing.includes(id)) {
      existing.push(id);
      localStorage.setItem("favAddedIds", JSON.stringify(existing));
    } else {
      const updatedFavs = existing.filter((item) => item !== id);
      localStorage.setItem("favAddedIds", JSON.stringify(updatedFavs));
    }
    return;
  }

  if (clickedCard) {
    const drinkId = clickedCard.id;
    window.location.href = `details.html?id=${drinkId}`;
  }
});

document.addEventListener("DOMContentLoaded", async () => {
  const urlParams = new URLSearchParams(window.location.search);
  const id = urlParams.get("id");

  if (!id) return;

  try {
    const res = await getCocktailById(id);
    renderDrinkDetails(res.drinks[0]);
  } catch (err) {
    console.error("Failed to load drink details:", err);
  }
});
