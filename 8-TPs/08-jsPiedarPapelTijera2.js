var eleccionMaquina;
var ContadorDeEmpates = 0;
var ContadorDeGanadas = 0;
var ContadorDePerdidas = 0;

function comenzar() {
  //Genero el número RANDOM entre 1 y 3
  eleccionMaquina = Math.floor(Math.random() * 3) + 1;
  console.log(eleccionMaquina);
} //FIN DE LA FUNCIÓN

function piedra() {
  if (eleccionMaquina == 1) {
    alert('Empate!');
    ContadorDeEmpates++;
  } else if (eleccionMaquina == 2) {
    alert('Usted perdió!');
    ContadorDePerdidas++;
  } else {
    alert('Usted gano!');
    ContadorDeGanadas++;
  }

  // Mostrar resultado
  mostrarResultado();

  // Nuevo numero random
  comenzar();
} //FIN DE LA FUNCIÓN
function papel() {
  if (eleccionMaquina == 2) {
    alert('Empate!');
    ContadorDeEmpates++;
  } else if (eleccionMaquina == 3) {
    alert('Usted perdió!');
    ContadorDePerdidas++;
  } else {
    alert('Usted gano!');
    ContadorDeGanadas++;
  }

  // Mostrar resultado
  mostrarResultado();

  // Nuevo numero random
  comenzar();
} //FIN DE LA FUNCIÓN
function tijera() {
  if (eleccionMaquina == 3) {
    alert('Empate!');
    ContadorDeEmpates++;
  } else if (eleccionMaquina == 1) {
    alert('Usted perdió!');
    ContadorDePerdidas++;
  } else {
    alert('Usted gano!');
    ContadorDeGanadas++;
  }

  // Mostrar resultado
  mostrarResultado();

  // Nuevo numero random
  comenzar();
} //FIN DE LA FUNCIÓN

function mostrarResultado() {
  document.getElementById('txtIdGanadas').value = ContadorDeGanadas;

  document.getElementById('txtIdPerdidas').value = ContadorDePerdidas;

  document.getElementById('txtIdEmpatadas').value = ContadorDeEmpates;
}
