async function fetchMovies() {
  const res = await fetch("https://www.omdbapi.com/?apikey=51106b2b&s=harry");
  const data = await res.json();

data.Search.forEach(movie => {
  const movieContainer = document.querySelector(".movie__container");
  const movieElement = document.createElement("div");
  movieElement.classList.add("movie");
  movieElement.innerHTML = `
    <img class="movie__poster" src="${movie.Poster}" alt="${movie.Title}">
    <div class="movie__info">
      <h2>${movie.Title}</h2>
      <p>Release Year: ${movie.Year}</p>
      <p>Genre: Fantasy</p>
    </div>
  `;
  movieContainer.appendChild(movieElement);
});
}
fetchMovies();