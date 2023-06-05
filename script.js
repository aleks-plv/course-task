//button order
const btn = document.getElementById('btn');

btn.addEventListener('click', () => {
  const form = document.getElementById('form');

  if (form.style.display === 'none') {
    form.style.display = 'block';
  } else {
    form.style.display = 'none';
  }
});






//stars
const starWrapper = document.querySelector(".stars");
const stars = document.querySelectorAll(".stars a");
let selectedRating = localStorage.getItem("rating"); // Retrieve the stored rating

// Function to handle star click event
const handleStarClick = (clickedIdx) => {
  starWrapper.classList.add("disabled");
  stars.forEach((otherStar, otherIdx) => {
    if (otherIdx <= clickedIdx) {
      otherStar.classList.add("active");
    }
  });
  console.log(`star of index ${clickedIdx} was clicked`);

  // Store the rating in local storage
  localStorage.setItem("rating", clickedIdx + 1);
};

stars.forEach((star, clickedIdx) => {
  star.addEventListener("click", () => {
    handleStarClick(clickedIdx);
  });

  // Set initial rating if it exists in the local storage
  if (clickedIdx + 1 <= selectedRating) {
    handleStarClick(clickedIdx);
  }
});
