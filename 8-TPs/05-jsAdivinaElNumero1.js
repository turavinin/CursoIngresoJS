/*Al comenzar el juego generamos un número 
secreto del 1 al 100, en la pantalla del juego
 dispondremos de un cuadro de texto para ingresar
  un número y un botón “Verificar”, si el número 
  ingresado es el mismo que el número secreto se dará 
  por terminado el juego con un mensaje similar a este: 
“Usted es un ganador!!! y en solo X intentos”.
de no ser igual se debe informar si “falta…”  para llegar al número secreto  o si “se pasó…”  del número secreto.
*/
let NUMERO_SECRETO;
let NUMERO_INTENTOS = 0;

function comenzar() {
  // Genero el número RANDOM entre 1 y 100
  NUMERO_SECRETO = Math.floor(Math.random() * 100) + 1;
}

function verificar() {
  // Almacenar numero elegido por usuario
  let numeroElegido = parseInt(document.getElementById('txtIdNumero').value);

  ++NUMERO_INTENTOS;
  document.getElementById('txtIdIntentos').value = NUMERO_INTENTOS;

  if (NUMERO_SECRETO == numeroElegido) {
    alert(`Usted es el ganador! Y en solo en ${NUMERO_INTENTOS} intentos!`);
  } else if (NUMERO_SECRETO > numeroElegido) {
    alert(`Esta por debajo del numero...`);
  } else {
    alert(`Se pasó del numero`);
  }

  console.log(`Numero secreto: ${NUMERO_SECRETO}`);
  console.log(`Numero intentos: ${NUMERO_INTENTOS}`);
}
