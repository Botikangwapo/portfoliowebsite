const darkToggle = document.querySelector(".darkmode");
const lightToggle = document.querySelector(".lightmode");
const bodydark = document.querySelector(".darkmode-body");
const mode = document.querySelector(".modes");
const modal = document.querySelector(".modal");
const themeLoader = document.querySelector(".theme-loader");

function showmodal() {
    modal.classList.toggle("show");
    
}  

function removemodal() {
    modal.classList.remove("show");
}

mode.addEventListener("click", (e) => {
    e.stopPropagation();
    showmodal()
});

document.addEventListener("click", () => {
    removemodal();
});

lightToggle.addEventListener("click", () => {
    document.body.classList.remove("dark-mode");
    bodydark.classList.remove("active");
    e.stopPropagation(); 
});

darkToggle.addEventListener("click", () => {
    document.body.classList.add("dark-mode");
    bodydark.classList.add("active");
    e.stopPropagation();
});


window.addEventListener("load", () => {
    const loader = document.querySelector(".preloader");

   setTimeout(() => {
      loader.classList.add("hide");
    }, 3200); 
});

 