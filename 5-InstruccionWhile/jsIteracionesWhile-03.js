/*
al presionar el botón pedir la CLAVE (ayuda: es utn750)*/
function mostrar() {
  var claveIngresada = prompt('ingrese el número clave.');

  while (claveIngresada != 'utn750') {
    claveIngresada = prompt('Clave incorrecta. Ingrese de nuevo');
  }

  alert('Ingreso exitoso');
} //FIN DE LA FUNCIÓN
