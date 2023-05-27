const selectedSeat = localStorage.getItem("selectedSeat");
const selectedMovie = JSON.parse(localStorage.getItem("movie"));

const selectedSeatEl = document.querySelector("#selected-seat");
const selectedMovieEl = document.querySelector("#selected-movie");

selectedSeatEl.textContent = `Selected Seat: ${selectedSeat}`;
selectedMovieEl.textContent = `Selected Movie: ${selectedMovie.title}`;
