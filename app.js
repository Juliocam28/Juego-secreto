let numeroSecreto = 0;
let intentos = 0;
let numeroMaxico = 10;

function asignarTextoElemento(elemento, texto) {
  let elementoHTML = document.querySelector(elemento);
  elementoHTML.innerHTML = texto;
  return;
}
/*Nota:en la linea 2 y 3 al momento de escribir el elementoHTML dio error sin embargo se compuso automaticamente que hice no se */
function verificarIntento() {
  let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);

  if (numeroDeUsuario === numeroSecreto) {
    asignarTextoElemento(
      "p",
      `acertaste el número en ${intentos} ${intentos === 1 ? "vez" : "veces"}`
    );
    document.getElementById("reiniciar").removeAttribute("disabled");
  } else {
    //el ususraio no acerto
    if (numeroDeUsuario > numeroSecreto) {
      asignarTextoElemento("p", "el número secreto en menor");
    } else {
      asignarTextoElemento("p", "el número secreto es mayor");
    }
    intentos++;
    limpiarCaja();
  }
  return;
}

function limpiarCaja() {
  document.querySelector("#valorUsuario").value = "";
}

function generarNumeroSecreto() {
  return (generarNumeroSecreto = Math.floor(Math.random() * numeroMaxico) + 1);
}

function condicionesIniciales() {
  asignarTextoElemento("h1", "Juego Del Número Secreto");
  asignarTextoElemento("p", `Indica un Numero del 1 al ${numeroMaxico}`);
  numeroSecreto = generarNumeroSecreto();
  intentos = 1;
}

function reiniciarJuego() {
  limpiarCaja();
  condicionesIniciales();
  document.querySelector("#reiniciar").setAttribute("disabled", "true");
}

condicionesIniciales();
