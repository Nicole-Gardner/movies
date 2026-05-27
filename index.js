const searchInput = document.querySelector(".search__input");
const movieContainer = document.querySelector(".movie__container");

async function fetchMovies(searchValue = "harry potter") {
  const res = await fetch(
    `https://www.omdbapi.com/?apikey=51106b2b&s=${searchValue}`
  );

  const data = await res.json();
  console.log(data);

  movieContainer.innerHTML = "";

  if (!data.Search) {
    movieContainer.innerHTML = "<p>No movies found.</p>";
    return;
  }

  data.Search.forEach((movie) => {
    movieContainer.innerHTML += `
      <div class="movie">
        <img class="movie__poster" src="${movie.Poster}" alt="${movie.Title}">
        <div class="movie__info">
          <h2>${movie.Title}</h2>
          <p>Release Year: ${movie.Year}</p>
        </div>
      </div>
    `;
  });
}

searchInput.addEventListener("input", function (event) {
  const searchValue = event.target.value;
  fetchMovies(searchValue);
});

fetchMovies();
