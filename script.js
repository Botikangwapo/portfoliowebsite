const darkToggle = document.querySelector(".darkmode");
const lightToggle = document.querySelector(".lightmode");
const bodydark = document.querySelector(".darkmode-body");
const mode = document.querySelector(".modes");
const modal = document.querySelector(".modal");
const themeLoader = document.querySelector(".theme-loader");
const body = document.body;
const html = document.documentElement;
const form = document.getElementById('contactForm');
const btn = document.getElementById('send-btn');
const modals = document.getElementById('modal');
const closeModal = document.getElementById('close-modal');

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
  html.style.overflow = "hidden";
  body.style.overflow = "hidden";
  const loader = document.querySelector(".preloader");
  setTimeout(() => {
    loader.classList.add("hide");
    html.style.overflow = "auto";
    body.style.overflow = "auto";
  }, 3200); 
});

const click = document.getElementById('click');
const certBtn = document.querySelector('.modal-cert');

click.addEventListener('click', () => {
  certBtn.classList.toggle('show');
});

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const name = form.querySelector('[name="from_name"]').value.trim();
  const email = form.querySelector('[name="from_email"]').value.trim();
  const message = form.querySelector('[name="message"]').value.trim();

  if (!name || !email || !message) {
    alert("All field are required")
    return;
  }

  btn.innerHTML = 'S E N D I N G...';
  btn.disabled = true;

  emailjs.sendForm(
    'service_mbkbwzq',
    'template_yofoi6b',
    this
  ).then(() => {
    btn.innerHTML = 'S E N D  M E S S A G E';
    btn.disabled = false;
    modals.style.display = 'flex';
    form.reset();
  }).catch((error) => {
    alert('Failed to send email. Please try again later.');
    btn.innerHTML = 'S E N D  M E S S A G E';
    btn.disabled = false;
    console.error(error);
  });
});

closeModal.addEventListener('click', () => {
  modals.style.display = 'none';
});
