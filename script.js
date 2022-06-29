// let obj = {
//   "name": "John",
//   "age": 28
// };
// let json = JSON.stringify(obj);
// console.log(json);
// let convertedObj = JSON.parse(json);
// console.log(convertedObj);

fetch("movies.json")
  .then((res) => res.json())
  .then((movies) => {
    console.log(movies);

    let moviesList = document.querySelector("#movies-list");

    movies.map((movie) => {
      let movieItem = document.createElement("div");
      movieItem.classList.add("movie-item");

      let movieTitle = document.createElement("p");
      movieTitle.textContent = movie.title;
      movieTitle.classList.add("movie-title");

      let imgEl = document.createElement("img");
      imgEl.src = movie.img;
      imgEl.classList.add("movie-img");

      let movieGenresList = document.createElement("ul");
      movieGenresList.classList.add("movies-genres");
      movie.genres.map((genre) => {
        let movieGenre = document.createElement("li");
        movieGenre.textContent = genre;
        movieGenresList.append(movieGenre);
      });

      let movieRanking = document.createElement("p");
      movieRanking.textContent = movie.review.ranking;
      movieRanking.classList.add("star");

      let movieViews = document.createElement("p");
      let count = numberShort(movie.review.count);
      movieViews.textContent = count;
      movieViews.classList.add("views");

      let movieInfoLineEl = document.createElement("div");
      movieInfoLineEl.classList.add("movie-info-line");
      movieInfoLineEl.append(movieGenresList, movieRanking, movieViews);

      let movieSummary = document.createElement("p");
      movieSummary.textContent = movie.summary;

      let movieDirector = document.createElement("p");
      let isPlural = movie.director.length && "s";
      let directors = movie.director.join(", ");
      movieDirector.innerHTML = `<strong>Director${isPlural}:</strong> ${directors}`;

      let movieCast = document.createElement("p");
      let actors = movie.cast.join(", ");
      movieCast.innerHTML = `<strong>Stars:</strong> ${actors}`;

      moviesList.append(movieItem);

      movieItem.append(imgEl);
      movieItem.append(movieInfoLineEl);

      movieItem.append(movieTitle);

      movieItem.append(movieSummary);
      movieItem.append(movieDirector);
      movieItem.append(movieCast);
    });
  });

let numberShort = (number) => {
  if (number > 1000000) return number / 1000000 + "M";
  if (number > 1000) return number / 1000 + "K";
  return number;
};
