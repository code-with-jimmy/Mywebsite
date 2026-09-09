// getting by refrance

const btn = document.querySelector(".click");

const nav = document.querySelector("nav");


// click event

btn.addEventListener("click", (e) => {
  e.stopPropagation();
  nav.classList.toggle("jimmy");
})

// bahar click event

document.addEventListener("click", () => {
  nav.classList.remove("jimmy");
})

// scroll event click

window.addEventListener("touchmove", () => {
  nav.classList.remove("jimmy");
})
