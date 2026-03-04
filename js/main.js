
const patos = document.querySelectorAll(".pato");
const scoreElemento = document.getElementById("score");
const timerElemento = document.getElementById("timer");
const gameoverElemento = document.getElementById("gameover");
const puntajeFinal = document.getElementById("puntajeFinal");

let puntos = 0;
let tiempo = 25;


function moverAleatorio(elemento) {
  let anchoPantalla = window.innerWidth - 100;
  let altoPantalla = window.innerHeight - 100;

  let x = Math.random() * anchoPantalla;
  let y = Math.random() * altoPantalla;

  elemento.style.left = x + "px";
  elemento.style.top = y + "px";
}


const movimientoIntervalo = setInterval(() => {
  patos.forEach(pato => {
    if (pato.style.display !== "none") {
      moverAleatorio(pato);
    }
  });
}, 1000);


patos.forEach(pato => {
  pato.addEventListener("click", () => {
    if (pato.style.display !== "none") {
      pato.style.display = "none";
      puntos++;
      scoreElemento.textContent = puntos;
    }
  });
});


const contador = setInterval(() => {
  tiempo--;
  timerElemento.textContent = tiempo;

  if (tiempo === 0) {
    clearInterval(contador);
    terminarJuego();
  }
}, 1000);


function terminarJuego() {

  gameoverElemento.style.display = "block";

  puntajeFinal.textContent = "Puntuacion final: " + puntos;
  puntajeFinal.style.display = "block";
  puntajeFinal.style.position = "absolute";
  puntajeFinal.style.top = "60%";
  puntajeFinal.style.left = "50%";
  puntajeFinal.style.transform = "translate(-50%, -50%)";
  puntajeFinal.style.fontSize = "40px";
  puntajeFinal.style.color = "white";
  puntajeFinal.style.fontFamily = "gameFont";


  clearInterval(movimientoIntervalo);


  patos.forEach(pato => {
    pato.style.pointerEvents = "none";
  });
}
