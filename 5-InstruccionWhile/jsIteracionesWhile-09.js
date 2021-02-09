/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar() {
  // declarar variables
  var banderaDelPrimero;
  var numeroIngresado;
  var numeroMaximo;
  var numeroMinimo;
  var respuesta;
  //iniciar variables
  banderaDelPrimero = 'es el primero';
  respuesta = 'si';

  while (respuesta == 'si') {
    numeroIngresado = parseInt(prompt('Ingrese un numero'));
    if (banderaDelPrimero == 'es el primero') {
      banderaDelPrimero = 'no es el primero';
      numeroMaximo = numeroIngresado;
      numeroMinimo = numeroIngresado;

      console.log('primero');
    } else if (numeroIngresado > numeroMaximo) {
      numeroMaximo = numeroIngresado;
    } else if (numeroIngresado < numeroMinimo) {
      numeroMinimo = numeroIngresado;
    }

    respuesta = prompt('desea continuar? (si / no)');
  }

  document.getElementById('txtIdMaximo').value = numeroMaximo;
  document.getElementById('txtIdMinimo').value = numeroMinimo;
} //FIN DE LA FUNCIÓN
