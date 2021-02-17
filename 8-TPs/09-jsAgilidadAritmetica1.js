/*Debemos mostrar dos números Random  del 1 al 10 
y una de las cuatro operaciones básicas (suma, resta,
 división o multiplicación) para realizar entre estos
 dos números, estas operaciones también serán Random.
 En el cuadro de texto resultado el jugador debe ingresar
 el resultado de la operación y presionar el botón Aceptar.
se debe informar si el resultado es el correcto o no.
*/

let numeroRandomUno;
let numeroRandomDos;
let numeroParaOperadorRandom;

function comenzar() {
  numeroRandomUno = Math.floor(Math.random() * 10) + 1;
  numeroRandomDos = Math.floor(Math.random() * 10) + 1;
  numeroParaOperadorRandom = Math.floor(Math.random() * 4) + 1;

  console.log(`Numero uno: ${numeroRandomUno}`);
  console.log(`Numero dos: ${numeroRandomDos}`);
  console.log(`Numero operador: ${numeroParaOperadorRandom}`);
} //FIN DE LA FUNCIÓN

function Responder() {
  let numeroSuma = 1;
  let numeroResta = 2;
  let numeroDivision = 3;
  let numeroMultiplicacion = 4;
  let resultado;
  // SUMA
  if (numeroParaOperadorRandom == numeroSuma) {
    document.getElementById('txtIdOperador').value = 'Suma';
    resultado = numeroRandomUno + numeroRandomDos;
  } else if (numeroParaOperadorRandom == numeroResta) {
    document.getElementById('txtIdOperador').value = 'Resta';
    resultado = numeroRandomUno - numeroRandomDos;
  } else if (numeroParaOperadorRandom == numeroDivision) {
    document.getElementById('txtIdOperador').value = 'División';
    resultado = numeroRandomUno / numeroRandomDos;
  } else {
    document.getElementById('txtIdOperador').value = 'Multiplicación';
    resultado = numeroRandomUno * numeroRandomDos;
  }

  document.getElementById('txtIdPrimerNumero').value = numeroRandomUno;
  document.getElementById('txtIdSegundoNumero').value = numeroRandomDos;
  document.getElementById('txtIdRespuesta').value = resultado;

  comenzar();
} //FIN DE LA FUNCIÓN
