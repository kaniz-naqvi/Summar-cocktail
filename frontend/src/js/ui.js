// navbar
export const renderNav = (navbar) => {
  navbar.innerHTML = `
    <nav class="flex absolute top-0 left-0 w-full z-30 bg-transparent items-start justify-between px-4 py-1">
      <a href="index.html" class="flex items-center lg:text-2xl text-lg font-cinzel text-theme-yellow">
        <img src="../assets/logo.png" alt="Logo" class="lg:w-24 w-16 h-auto object-cover position-center" />
        <span class="lg:inline-flex md:inline-flex flex-col items-center justify-center text-center hidden">
          Summer <br /> CockTail Party
        </span>
      </a>
      <div class="flex gap-6 text-lg mt-7 items-center">
        <a href="list.html" id="searchLink" class="text-theme-yellow hover:text-white flex items-center gap-1">
          <i class="ri-search-line text-xl"></i> Search
        </a>
        <a href="fav.html" class="text-theme-yellow hover:text-white flex items-center gap-1">
          <i class="ri-heart-3-line text-xl"></i> Favs
        </a>
      </div>
    </nav>
  `;

  const searchLink = navbar.querySelector("#searchLink");
  searchLink.addEventListener("click", (e) => {
    e.preventDefault();
    const isListPage = window.location.pathname.includes("list.html");

    if (isListPage) {
      searchLink.outerHTML = `
      <i class="ri-search-line text-xl text-theme-yellow"></i>
        <input 
          type="text" 
          placeholder= "Search here..." 
          id="searchInput" 
          class="border-b-theme-yellow outline-none bg-theme-black px-2 py-1"
          autofocus
        />
      `;
    } else {
      // Not on list.html, so redirect normally
      window.location.href = "list.html";
    }
  });
};

// home
export function renderHero(drink, container) {
  const ingredients = [];
  for (let i = 1; i <= 15; i++) {
    const ing = drink[`strIngredient${i}`];
    const measure = drink[`strMeasure${i}`];
    if (ing) ingredients.push(`${measure || ""} ${ing}`.trim());
  }
  const ingredientsText = ingredients.join(" • ");

  container.innerHTML = `
    <div class="relative w-full h-half-screen flex items-center justify-center text-white font-serif overflow-hidden">
      <img src="${drink.strDrinkThumb}" alt="${drink.strDrink}" class="absolute inset-0 w-full h-full object-cover object-center z-0" />
      <div class="absolute inset-0 bg-black/30 z-10"></div>
      <div class="relative z-20 text-center px-4">
        <p class="uppercase tracking-widest text-sm md:text-base text-c-gray text-shadow mb-2">Discover Unique Cocktails (Summer Spacial)</p>
        <h1 class="text-4xl md:text-6xl font-extrabold mb-6">Refreshing Cocktails</h1>
        <a href="list.html" class="inline-block px-6 py-3 border border-white text-white hover:bg-white hover:text-black transition">Explore More</a>
      </div>
    </div>
    <div>
      <div class="relative z-20 text-center px-4 my-7 mb-16">
        <h1 class="text-4xl md:text-6xl font-extrabold mb-6 font-cinzel">${drink.strDrink}</h1>
        <p class="italic text-d-gray max-w-2xl mx-auto mb-4">${drink.strInstructions}</p>
        <p class="italic text-c-gray max-w-2xl mx-auto mb-4">${ingredientsText}</p>
        <a href="list.html" class="btn-orange-outline">Explore More</a>
      </div>
    </div>
  `;
}

// list
export function renderCocktailList(drinks = []) {
  const listContainer = document.getElementById("cocktail-list");

  if (!drinks || drinks.length === 0) {
    listContainer.innerHTML = `<p class="text-center text-theme-yellow text-xl mt-10">No Result found!</p>`;
    return;
  }

  listContainer.innerHTML = drinks
    .map(
      (drink, index) => `
    <div class="flex flex-col md:flex-row ${
      index % 2 !== 0 ? "md:flex-row-reverse" : ""
    } border border-white rounded-xl overflow-hidden lg:p-3 md:p-5 lg:space-y-5 md:space-x-0 shadow-sm">
      
      <!-- Image -->
      <div class="w-full md:w-1/2 lg:h-96 sm:h-48 border-r lg:border-light lg:px-2 ${
        index % 2 !== 0 ? "md:border-l md:border-r-0" : ""
      }">
        <img src="${drink.strDrinkThumb}" alt="${
        drink.strDrink
      }" class="w-full h-full object-cover object-top rounded-md" />
      </div>

      <!-- Content -->
      <div class="w-full md:w-1/2 flex flex-col justify-center px-4 py-2">
        <div class="flex items-start justify-between">
          <h3 class="text-xl md:text-2xl font-semibold text-theme-yellow font-cinzel">${
            drink.strDrink
          }</h3>
          <button class=".btn-orange">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="currentColor" viewBox="0 0 20 20">
              <path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"/>
            </svg>
          </button>
        </div>
      </div>

    </div>
  `
    )
    .join("");
}
