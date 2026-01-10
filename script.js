const darkToggle = document.querySelector(".darkmode");
const lightToggle = document.querySelector(".lightmode");
const bodydark = document.querySelector(".darkmode-body");
const mode = document.querySelector(".modes");
const modal = document.querySelector(".modal");

mode.addEventListener("click", () => {
    modal.classList.toggle("show");
});

lightToggle.addEventListener("click", () => {
    document.body.classList.remove("dark-mode");
    bodydark.classList.remove("active");
});

darkToggle.addEventListener("click", () => {
    document.body.classList.add("dark-mode");
    bodydark.classList.add("active");
});



window.addEventListener("load", () => {
    const loader = document.querySelector(".preloader");

   setTimeout(() => {
      loader.classList.add("hide");
    }, 3200); 
});

