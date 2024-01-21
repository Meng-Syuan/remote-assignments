const h1 = document.querySelector("h1");
h1.addEventListener("click", () => {
  h1.innerText = "Have a Good Time!";
});

//For menu icon toggle
const menuIcon = document.querySelector("#menu-icon");
const nav = document.querySelector("nav");
const closeIcon = document.querySelector("#close-icon");

menuIcon.addEventListener("click", () => {
  if (window.innerWidth < 800) {
    nav.style = "transform:translateX(0); transition:all 0.3s;";
  }
});

closeIcon.addEventListener("click", () => {
  if (window.innerWidth < 800) {
    nav.style.transform = "translateX(105%)";
  }
});

window.addEventListener("resize", () => {
  if (window.innerWidth >= 800) {
    nav.style.transform = "translateX(0)";
  } else {
    nav.style = "transform:translateX(105%); transition:all 0s;";
  }
});

//For 'call to action' button
const actionButton = document.querySelector("#action");
const moreBoxes = document.querySelector(".more");
actionButton.addEventListener("click", () => {
  moreBoxes.style.display = "flex";
  actionButton.style.marginButtom = "0";
});
