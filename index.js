async function fetchMovies(searchValue = s=$searchValue) {
  const res = await fetch(
    `https://www.omdbapi.com/?apikey=51106b2b&s=${searchValue}`
  );

  const data = await res.json();
  console.log(data);
}
const searchInput = document.querySelector(".search__input");

searchInput.addEventListener("input", function (event) {
  const searchValue = event.target.value;
  fetchMovies(searchValue);
});