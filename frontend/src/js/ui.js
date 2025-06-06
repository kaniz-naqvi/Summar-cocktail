document.addEventListener("DOMContentLoaded", () => {
  const body = document.body;
  body.classList.add("bg-theme-black", "text-white", "min-h-screen");
  const navbar = `
    <nav class="flex items-start justify-between px-4 py-1">
      <a href="index.html" class="flex items-center lg:text-2xl text-lg font-cinzel text-theme-yellow">
        <img src="../assets/logo.jpg"alt="Logo" class="lg:w-24 w-16 h-auto object-cover position-center" />
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

  body.insertAdjacentHTML("afterbegin", navbar);
});
