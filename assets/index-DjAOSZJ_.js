(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=document.querySelector(`.header`);window.addEventListener(`scroll`,()=>{e&&e.classList.toggle(`active`,window.scrollY>50)});var t=document.getElementById(`menuBtn`),n=document.querySelector(`.nav-links`);t&&t.addEventListener(`click`,()=>{n.classList.toggle(`active`)});var r=document.getElementById(`heroBtn`);r&&r.addEventListener(`click`,()=>{r.innerText=`Explorando destinos ✈️`});var i=document.getElementById(`themeBtn`);i&&i.addEventListener(`click`,()=>{document.body.classList.toggle(`dark-mode`)}),document.querySelectorAll(`.counter`).forEach(e=>{let t=0,n=()=>{let r=+e.getAttribute(`data-target`);t<r?(t+=Math.ceil(r/50),e.innerText=t,setTimeout(n,40)):e.innerText=r};n()});var a=[{nombre:`Brasil`,informacion:`Disfruta playas paradisíacas, cultura vibrante y experiencias inolvidables en Brasil.`,imagen:brasilImg,link:`https://visitbrasil.com/es/`},{nombre:`Panamá`,informacion:`Explora la modernidad, centros turísticos y el famoso Canal de Panamá.`,imagen:panamaImg,link:`https://es.tourismpanama.com/`},{nombre:`República Dominicana`,informacion:`Vive experiencias premium en playas tropicales y resorts exclusivos.`,imagen:dominicanaImg,link:`https://www.godominicanrepublic.com/`}],o=document.getElementById(`cardsContainer`);o&&(o.innerHTML=``,a.forEach(e=>{let t=`

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

    `;o.innerHTML+=t}));var s=document.getElementById(`travelForm`);s&&s.addEventListener(`submit`,e=>{e.preventDefault();let t=document.getElementById(`name`).value.trim(),n=document.getElementById(`email`).value.trim(),r=document.getElementById(`destination`).value,i=document.getElementById(`messageText`).value.trim(),a=document.getElementById(`formMessage`),o=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;if(t.length<3){a.innerText=`El nombre debe tener mínimo 3 caracteres.`,a.style.color=`red`;return}if(!o.test(n)){a.innerText=`Ingresa un correo válido.`,a.style.color=`red`;return}if(r===``){a.innerText=`Selecciona un destino.`,a.style.color=`red`;return}if(i.length<10){a.innerText=`El mensaje debe tener mínimo 10 caracteres.`,a.style.color=`red`;return}a.innerText=`Reservación enviada correctamente.`,a.style.color=`green`,s.reset()}),document.querySelectorAll(`.faq-item`).forEach(e=>{e.querySelector(`.faq-question`).addEventListener(`click`,()=>{e.classList.toggle(`active`)})});var c=document.querySelectorAll(`.reveal`);window.addEventListener(`scroll`,l);function l(){c.forEach(e=>{let t=window.innerHeight;e.getBoundingClientRect().top<t-100&&e.classList.add(`active`)})}l();