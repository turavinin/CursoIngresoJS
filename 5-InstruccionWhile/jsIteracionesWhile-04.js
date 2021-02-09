/*
al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/
function mostrar() {
  let numeroIngresado = parseInt(
    prompt('ingrese un número entre 0 y 9 inclusive.')
  );

  while (numeroIngresado > 9 || numeroIngresado < 0) {
    numeroIngresado = parseInt(
      prompt('Incorrecto. Ingrese un número entre 0 y 9 inclusive.')
    );
  }

  document.getElementById('txtIdNumero').value = numeroIngresado;
} //FIN DE LA FUNCIÓN
