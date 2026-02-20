const mode = document.querySelector(".modes");
const modal = document.querySelector(".modal");
const modalbody = document.querySelector(".modal-body");
const themeLoader = document.querySelector(".theme-loader");
const body = document.body;
const html = document.documentElement;
const form = document.getElementById('contactForm');
const btn = document.getElementById('send-btn');
const modals = document.getElementById('modal');
const closeModal = document.getElementById('close-modal');


function preloader() {
  window.addEventListener("load", () => {
    html.style.overflow = "hidden";
    body.style.overflow = "hidden";
    const loader = document.querySelector(".preloader");
    setTimeout(() => {
      loader.classList.add("hide");
      html.style.overflow = "auto";
      body.style.overflow = "auto";
    }, 100);
  });
}

function cert() {
  const click = document.getElementById('click');
  const certBtn = document.querySelector('.modal-cert');

  click.addEventListener('click', () => {
    certBtn.classList.toggle('show');
  });

  document.addEventListener('click', (event) => {
    if (!click.contains(event.target) && !certBtn.contains(event.target)) {
      certBtn.classList.remove('show');
    }
  });
}

cert();
preloader();

function emailjs() {
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
}

function darkmode() {
  mode.addEventListener("click", () => {
    modalbody.classList.toggle("moveleft");
    body.classList.toggle("dark-mode");
  });
}

cert();
preloader();
emailjs();
darkmode();