const pato1 = document.getElementById('patito1')
const pato2 = document.getElementById('patito2')
function moverAleatorio(elemento) {
  let anchoPantalla = window.innerWidth - 100;  
  let altoPantalla = window.innerHeight - 50;

  let x = Math.random() * anchoPantalla;
  let y = Math.random() * altoPantalla;

  elemento.style.left = x + "px";
  elemento.style.top = y + "px";
}

setInterval(() => {
    moverAleatorio(pato1);
    moverAleatorio(pato2);
}, 1000);
