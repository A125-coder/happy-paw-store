const burgerBtn = document.getElementById("burger-btn");
const navMenu = document.getElementById("navigation");

burgerBtn.addEventListener("click", () => {
  burgerBtn.classList.toggle("active");
  navMenu.classList.toggle("active");
});
