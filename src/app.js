// =========================
// NAVBAR EFECTO SCROLL
// =========================

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
  if (header) {
    header.classList.toggle("active", window.scrollY > 50);
  }
});

// =========================
// MENÚ RESPONSIVE
// =========================

const menuBtn = document.getElementById("menuBtn");

const navLinks = document.querySelector(".nav-links");

if (menuBtn) {
  menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });
}

// =========================
// BOTÓN HERO
// =========================

const heroBtn = document.getElementById("heroBtn");

if (heroBtn) {
  heroBtn.addEventListener("click", () => {
    heroBtn.innerText = "Explorando destinos ✈️";
  });
}

// =========================
// MODO OSCURO
// =========================

const themeBtn = document.getElementById("themeBtn");

if (themeBtn) {
  themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
  });
}

// =========================
// CONTADOR ANIMADO
// =========================

const counters = document.querySelectorAll(".counter");

counters.forEach((counter) => {
  let start = 0;

  const updateCounter = () => {
    const target = +counter.getAttribute("data-target");

    if (start < target) {
      start += Math.ceil(target / 50);

      counter.innerText = start;

      setTimeout(updateCounter, 40);
    } else {
      counter.innerText = target;
    }
  };

  updateCounter();
});
// =========================
// DESTINOS DINÁMICOS
// =========================

const destinos = [
  {
    nombre: "Brasil",

    informacion:
      "Disfruta playas paradisíacas, cultura vibrante y experiencias inolvidables en Brasil.",

    imagen: "/src/assets/images/brasil1.jpg",

    link: "https://visitbrasil.com/es/",
  },

  {
    nombre: "Panamá",

    informacion:
      "Explora la modernidad, centros turísticos y el famoso Canal de Panamá.",

    imagen: "/src/assets/images/panama1.jpg",

    link: "https://es.tourismpanama.com/",
  },

  {
    nombre: "República Dominicana",

    informacion:
      "Vive experiencias premium en playas tropicales y resorts exclusivos.",

    imagen: "/src/assets/images/dominicana1.jpg",

    link: "https://www.godominicanrepublic.com/",
  },
];

const cardsContainer = document.getElementById("cardsContainer");

if (cardsContainer) {
  // LIMPIAR CONTENEDOR

  cardsContainer.innerHTML = "";

  // CREAR TARJETAS

  destinos.forEach((destino) => {
    const card = `

      <div class="flip-card reveal">

        <div class="flip-card-inner">

          <!-- FRENTE -->

          <div class="flip-card-front">

            <img
              src="${destino.imagen}"
              alt="${destino.nombre}">

            <div class="card-content">

              <h3>
                ${destino.nombre}
              </h3>

            </div>

          </div>

          <!-- ATRÁS -->

          <div class="flip-card-back">

            <h3>
              ${destino.nombre}
            </h3>

            <p>
              ${destino.informacion}
            </p>

            <a
              href="${destino.link}"
              target="_blank"
              rel="noopener noreferrer"
              class="info-btn">

              Más información

            </a>

          </div>

        </div>

      </div>

    `;

    cardsContainer.innerHTML += card;
  });
}
// =========================
// VALIDACIÓN FORMULARIO
// =========================

const form = document.getElementById("travelForm");

if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();

    const email = document.getElementById("email").value.trim();

    const destination = document.getElementById("destination").value;

    const messageText = document.getElementById("messageText").value.trim();

    const formMessage = document.getElementById("formMessage");

    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // VALIDACIÓN NOMBRE

    if (name.length < 3) {
      formMessage.innerText = "El nombre debe tener mínimo 3 caracteres.";

      formMessage.style.color = "red";

      return;
    }

    // VALIDACIÓN EMAIL

    if (!regex.test(email)) {
      formMessage.innerText = "Ingresa un correo válido.";

      formMessage.style.color = "red";

      return;
    }

    // VALIDACIÓN DESTINO

    if (destination === "") {
      formMessage.innerText = "Selecciona un destino.";

      formMessage.style.color = "red";

      return;
    }

    // VALIDACIÓN MENSAJE

    if (messageText.length < 10) {
      formMessage.innerText = "El mensaje debe tener mínimo 10 caracteres.";

      formMessage.style.color = "red";

      return;
    }

    // MENSAJE EXITOSO

    formMessage.innerText = "Reservación enviada correctamente.";

    formMessage.style.color = "green";

    form.reset();
  });
}

// =========================
// FAQ INTERACTIVO
// =========================

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach((item) => {
  const question = item.querySelector(".faq-question");

  question.addEventListener("click", () => {
    item.classList.toggle("active");
  });
});

// =========================
// ANIMACIONES SCROLL
// =========================

const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", revealElements);

function revealElements() {
  reveals.forEach((element) => {
    const windowHeight = window.innerHeight;

    const revealTop = element.getBoundingClientRect().top;

    if (revealTop < windowHeight - 100) {
      element.classList.add("active");
    }
  });
}

// EJECUTAR AL CARGAR

revealElements();
