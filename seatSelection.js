const seatSelectionSection = document.getElementById("seat-selection-section");
seatSelectionSection.style.display = "none";

const seats = seatSelectionSection.querySelectorAll(".seat");

seats.forEach((seat) => {
  seat.addEventListener("click", () => {
    const selectedSeat = seat.textContent;
    localStorage.setItem("selectedSeat", selectedSeat);
    window.location = "checkout.html";
  });
});

function showSeatSelectionSection() {
  seatSelectionSection.style.display = "block";
}

const clickedMovie = JSON.parse(localStorage.getItem("movie"));

function showMovies(movies) {
  main.innerHTML = "";

  movies.forEach((movie) => {
    const { title, overview, original_language, vote_average, poster_path } =
      movie;

    const movieEl = document.createElement("div");
    movieEl.classList.add("col-4");

    movieEl.innerHTML = `
      <div class="p-4">
        <div class="movies">
          <img src="${IMG_PATH + poster_path}">
          <div class="movie_content_box">
            <h3>${title}</h3>
            <p>${overview}</p>
            <p>${original_language}</p>
          </div>
          <span>
            <p class="${getClassByVote(vote_average)}">${vote_average}</p>
          </span>
        </div>
      </div>
    `;

    main.appendChild(movieEl);

    movieEl.addEventListener("click", () => {
      localStorage.setItem("movie", JSON.stringify(movie));
      window.location = "movie.html";
      showSeatSelectionSection();
    });
  });
}

if (clickedMovie) {
  showSeatSelectionSection();
}
