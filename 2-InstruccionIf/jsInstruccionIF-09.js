function mostrar() {
  // Math random retorna un numero entre 0 y 1 => Luego se multiplica por 10 que es el rango
  // => Math floor luego redondea el numero hacia abajo (puede quedar un 6.38 antes) =>
  // => el + 1 sirve para que no de 0 y que de 10.
  let numeroRandom = Math.floor(Math.random() * 10) + 1;

  alert(numeroRandom);
} //FIN DE LA FUNCIÓN
