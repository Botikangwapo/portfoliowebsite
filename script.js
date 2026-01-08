const darkToggle = document.querySelector(".darkmode");
const bodydark = document.querySelector(".darkmode-body");

darkToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  bodydark.classList.toggle("active");
});
