function mostrar() {
  let contador = 0;
  let acumulador = 0;
  let numeroIngresado;

  while (contador < 5) {
    contador++;
    numeroIngresado = parseInt(prompt(`Ingrese el ${contador}° numero:`));
    acumulador += numeroIngresado;
  }

  document.getElementById('txtIdSuma').value = acumulador;
  document.getElementById('txtIdPromedio').value = acumulador / contador;
} //FIN DE LA FUNCIÓN
