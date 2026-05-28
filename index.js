const searchInput = document.querySelector("#searchInput");
const sortFilter = document.querySelector("#sortFilter"); // Only declare this once
const movieContainer = document.querySelector(".movie__container"); // Fixed variable name

async function fetchMovies(searchValue = "harry potter") {
  const res = await fetch(`https://www.omdbapi.com/?apikey=51106b2b&s=${searchValue}`);
  const data = await res.json();
  console.log(data);


  movieContainer.innerHTML = "";

 
  if (!data.Search) {
    movieContainer.innerHTML = "<p>No movies found.</p>";
    return;
  }

  let movies = data.Search;


  if (sortFilter.value === "newest") {
    movies.sort((a, b) => b.Year - a.Year);
  } else if (sortFilter.value === "oldest") {
    movies.sort((a, b) => a.Year - b.Year);
  }

  movies.forEach((movie) => {
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
}
);

sortFilter.addEventListener("change", function () {
  const searchValue = searchInput.value || "harry potter";
  fetchMovies(searchValue);
});