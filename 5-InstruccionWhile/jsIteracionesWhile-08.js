/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar() {
  let contador = 0;
  let respuesta = 'si';
  let numeroElegido = 0;
  let multiplicacionNegativos = 1;
  let sumaPositivos = 0;

  while (respuesta == 'si') {
    numeroElegido = parseInt(prompt('Ingrese un numero'));

    if (numeroElegido >= 0) {
      sumaPositivos += numeroElegido;
    } else {
      multiplicacionNegativos *= numeroElegido;
    }

    respuesta = prompt('¿Desea agregar otro numero? (si/no)');
    contador++;
  }

  document.getElementById('txtIdSuma').value = sumaPositivos;
  document.getElementById('txtIdProducto').value = multiplicacionNegativos;
} //FIN DE LA FUNCIÓN
