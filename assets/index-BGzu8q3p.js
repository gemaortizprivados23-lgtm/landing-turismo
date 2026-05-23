(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=`/landing-turismo/assets/brasil1-UEZrHFsX.jpg`,t=`/landing-turismo/assets/panama1-Blo9SVa8.jpg`,n=`/landing-turismo/assets/dominicana1-3KaA8Qya.jpg`,r=document.querySelector(`.header`);window.addEventListener(`scroll`,()=>{r&&r.classList.toggle(`active`,window.scrollY>50)});var i=document.getElementById(`menuBtn`),a=document.querySelector(`.nav-links`);i&&i.addEventListener(`click`,()=>{a.classList.toggle(`active`)});var o=document.getElementById(`heroBtn`);o&&o.addEventListener(`click`,()=>{o.innerText=`Explorando destinos ✈️`});var s=document.getElementById(`themeBtn`);s&&s.addEventListener(`click`,()=>{document.body.classList.toggle(`dark-mode`)}),document.querySelectorAll(`.counter`).forEach(e=>{let t=0,n=()=>{let r=+e.getAttribute(`data-target`);t<r?(t+=Math.ceil(r/50),e.innerText=t,setTimeout(n,40)):e.innerText=r};n()});var c=[{nombre:`Brasil`,informacion:`Disfruta playas paradisíacas, cultura vibrante y experiencias inolvidables en Brasil.`,imagen:e,link:`https://visitbrasil.com/es/`},{nombre:`Panamá`,informacion:`Explora la modernidad, centros turísticos y el famoso Canal de Panamá.`,imagen:t,link:`https://es.tourismpanama.com/`},{nombre:`República Dominicana`,informacion:`Vive experiencias premium en playas tropicales y resorts exclusivos.`,imagen:n,link:`https://www.godominicanrepublic.com/`}],l=document.getElementById(`cardsContainer`);l&&(l.innerHTML=``,c.forEach(e=>{let t=`

      <div class="flip-card reveal">

        <div class="flip-card-inner">

          <!-- FRENTE -->

          <div class="flip-card-front">

            <img
              src="${e.imagen}"
              alt="${e.nombre}">

            <div class="card-content">

              <h3>
                ${e.nombre}
              </h3>

            </div>

          </div>

          <!-- ATRÁS -->

          <div class="flip-card-back">

            <h3>
              ${e.nombre}
            </h3>

            <p>
              ${e.informacion}
            </p>

            <a
              href="${e.link}"
              target="_blank"
              rel="noopener noreferrer"
              class="info-btn">

              Más información

            </a>

          </div>

        </div>

      </div>

    `;l.innerHTML+=t}));var u=document.getElementById(`travelForm`);u&&u.addEventListener(`submit`,e=>{e.preventDefault();let t=document.getElementById(`name`).value.trim(),n=document.getElementById(`email`).value.trim(),r=document.getElementById(`destination`).value,i=document.getElementById(`messageText`).value.trim(),a=document.getElementById(`formMessage`),o=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;if(t.length<3){a.innerText=`El nombre debe tener mínimo 3 caracteres.`,a.style.color=`red`;return}if(!o.test(n)){a.innerText=`Ingresa un correo válido.`,a.style.color=`red`;return}if(r===``){a.innerText=`Selecciona un destino.`,a.style.color=`red`;return}if(i.length<10){a.innerText=`El mensaje debe tener mínimo 10 caracteres.`,a.style.color=`red`;return}a.innerText=`Reservación enviada correctamente.`,a.style.color=`green`,u.reset()}),document.querySelectorAll(`.faq-item`).forEach(e=>{e.querySelector(`.faq-question`).addEventListener(`click`,()=>{e.classList.toggle(`active`)})});var d=document.querySelectorAll(`.reveal`);window.addEventListener(`scroll`,f);function f(){d.forEach(e=>{let t=window.innerHeight;e.getBoundingClientRect().top<t-100&&e.classList.add(`active`)})}f();