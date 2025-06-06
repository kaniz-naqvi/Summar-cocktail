export const renderNav = (navbar) => {
  navbar.innerHTML = `
    <nav class="flex absolute top-0 left-0 w-full z-30 bg-transparent items-start justify-between px-4 py-1">
      <a href="index.html" class="flex items-center lg:text-2xl text-lg font-cinzel text-theme-yellow">
        <img src="../assets/logo.png"alt="Logo" class="lg:w-24 w-16 h-auto object-cover position-center" />
       <span class="lg:inline-flex md:inline-flex flex-col items-center justify-center text-center hidden">
         Summer <br /> CockTail Party
       </span>
      </a>
      <div class="flex gap-6 text-lg mt-7">
        <a href="list.html" class="text-theme-yellow hover:text-white flex items-center gap-1">
          <i class="ri-search-line text-xl"></i> Search
        </a>
        <a href="fav.html" class="text-theme-yellow hover:text-white flex items-center gap-1">
          <i class="ri-heart-3-line text-xl"></i> Favs
        </a>
      </div>
    </nav>
  `;
};

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
