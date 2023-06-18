const btn = document.getElementById("btn");
const form = document.getElementById("form");
const overlay = document.getElementById("overlay");
const closeBtn = document.querySelector(".close");

btn.addEventListener("click", () => {
  if (form.style.display === "none") {
    //shows form
    form.style.display = "block";
    overlay.style.opacity = 1;
  } else {
    form.style.display = "none"; 
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

// page 1 img
const imageLink1 = document.getElementById("club5AM");
const imageLink2 = document.getElementById("devilBook");
const imageLink3 = document.getElementById("richDad");
const imageLink4 = document.getElementById("leaders");
const imageLink5 = document.getElementById("winner");

//img
imageLink1.addEventListener("click", () => {
  window.open("5amBook.html", "_blank");
});

imageLink2.addEventListener("click", () => {
  window.open("devilBook.html", "_blank");
});

imageLink3.addEventListener("click", () => {
  window.open("richDad.html", "_blank");
});

imageLink4.addEventListener("click", () => {
  window.open("leaders.html", "_blank");
});

imageLink5.addEventListener("click", () => {
  window.open("winner.html", "_blank");
});

// buy buttons
const buyBook1 = document.getElementById("buy-5am");
const buyBook2 = document.getElementById("buy-devil");
const buyBook3 = document.getElementById("buy-rich");
const buyBook4 = document.getElementById("buy-leaders");
const buyBook5 = document.getElementById("buy-winners");

// buy button
buyBook1.addEventListener("click", () => {
  window.open("5amBook.html", "_blank");
});

buyBook2.addEventListener("click", () => {
  window.open("devilBook.html", "_blank");
});

buyBook3.addEventListener("click", () => {
  window.open("richDad.html", "_blank");
});

buyBook4.addEventListener("click", () => {
  window.open("leaders.html", "_blank");
});

buyBook5.addEventListener("click", () => {
  window.open("winner.html", "_blank");
});


//footer
const gitLink = document.getElementById("git");
const linkedInLink = document.getElementById("linkedin");

gitLink.addEventListener("click", () => {
  window.open("https://github.com/aleks-plv", "_blank");
});

linkedInLink.addEventListener("click", () => {
  window.open("https://www.linkedin.com/in/aleksandrina-velikova-4b31bb275/", "_blank");
});
