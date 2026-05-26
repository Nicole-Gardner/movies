    const movies = [
  {
    Title: "Harry Potter and the Deathly Hallows: Part 2",
    Year: "2011",
    Poster: "..."
  },
  {
    Title: "Harry Potter and the Sorcerer's Stone",
    Year: "2001",
    Poster: "..."
  }
];

function renderMovies(movieList) {
  const moviesWrapper = document.querySelector(".movies");

  moviesWrapper.innerHTML = movieList
    .map(movie => `
      <div class="movie">
        <img class="movie__poster" src="${movie.Poster}" alt="${movie.Title}">
        <div class="movie__info">
          <h2>${movie.Title}</h2>
          <p>Release Year: ${movie.Year}</p>
          <p>Genre: Fantasy</p>
        </div>
      </div>
    `)
    .join("");
}

function sortOldestToNewest() {
  movies.sort((a, b) => Number(a.Year) - Number(b.Year));
  renderMovies(movies);
}

renderMovies(movies);