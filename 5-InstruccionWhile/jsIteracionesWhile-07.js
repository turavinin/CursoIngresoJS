/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar() {
  let contador = 0;
  let acumulador = 0;
  let respuesta = 'si';

  while (respuesta == 'si') {
    acumulador += parseInt(prompt('Ingrese un numero'));
    respuesta = prompt('¿Desea agregar otro numero? (si/no)');
    contador++;
  }

  document.getElementById('txtIdSuma').value = acumulador;
  document.getElementById('txtIdPromedio').value = acumulador / contador;
} //FIN DE LA FUNCIÓN
