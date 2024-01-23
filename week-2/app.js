const h1 = document.querySelector("h1");
h1.addEventListener("click", () => {
  h1.innerText = "Have a Good Time!";
});

//For menu toggle
const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#close-btn");
const nav = document.querySelector("nav");
menuBtn.addEventListener("click", () => {
  nav.classList.toggle("toggle");
});
closeBtn.addEventListener("click", () => {
  nav.classList.toggle("toggle");
});

//For 'call to action' button
const actionBtn = document.querySelector("#action");
const moreBoxes = document.querySelector(".more");
actionBtn.addEventListener("click", () => {
  moreBoxes.style.display = "flex";
  actionBtn.style.marginButtom = "0";
});
