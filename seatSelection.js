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

if (clickedMovie) {
  showSeatSelectionSection();
}
