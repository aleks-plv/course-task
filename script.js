//button order
const btn = document.getElementById("btn");
const form = document.getElementById("form");
const overlay = document.getElementById("overlay");
const closeBtn = document.querySelector(".close");

btn.addEventListener("click", () => {
  if (form.style.display === "none") {
    //ako formata e skrita se pokazva
    form.style.display = "block";
    overlay.style.opacity = 1;
  } else {
    form.style.display = "none"; //skriva formata
    overlay.style.opacity = 0;
  }
});

closeBtn.addEventListener("click", () => {
  form.style.display = "none";
  overlay.style.opacity = 0;
});

//stars
const starWrapper = document.querySelector(".stars");
const stars = document.querySelectorAll(".stars a");

stars.forEach((star, clickedIdx) => {
  star.addEventListener("click", () => {
    starWrapper.classList.add("disabled");
    stars.forEach((otherStar, otherIdx) => {
      if (otherIdx <= clickedIdx) {
        otherStar.classList.add("active");
      }
    });
    console.log(`star of index ${clickedIdx} was clicked`);
  });
});
