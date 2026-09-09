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



// secend aler message

const btn1 = document.querySelector("#Get1");
const btn2 = document.querySelector("#Get2");
const btn3 = document.querySelector("#Get3");


btn1.addEventListener("click", () => {
  alert("✨ Services Coming Soon! ")
})


btn2.addEventListener("click", () => {
  alert("✨ Services Coming Soon! ")
})


btn3.addEventListener("click", () => {
  alert("✨ Services Coming Soon! ")
})
