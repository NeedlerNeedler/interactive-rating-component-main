document.addEventListener("DOMContentLoaded", () => {
  let selectedRating = 0;

  const ratingItems = document.querySelectorAll(".numbers");
  const submitBtn = document.getElementById("submit-btn");
  const firstState = document.querySelector(".first-state");
  const secondState = document.querySelector(".second-state");
  const ratingSpan = document.getElementById("rating-span");

  ratingItems.forEach((item) => {
    item.addEventListener("click", () => {
      ratingItems.forEach((i) => i.classList.remove("active"));
      item.classList.add("active");
      selectedRating = item.textContent;
    });
  });

  submitBtn.addEventListener("click", () => {
    if (selectedRating > 0) {
      ratingSpan.textContent = selectedRating;
      changeStates();
    } else {
      alert("Please select a rating before submitting.");
    }
  });

  function changeStates() {
    firstState.style.display = "none";
    secondState.style.display = "flex";
  }
});
