function mostrar() {
  let numeroRandom = Math.floor(Math.random() * 10) + 1;

  if (numeroRandom < 4) {
    alert(`La nota es ${numeroRandom}. Vamos, la proxima se puede`);
  } else if (numeroRandom < 9) {
    alert(`La nota es ${numeroRandom}. Aprobó`);
  } else {
    alert(`La nota es ${numeroRandom}. Excelente`);
  }
} //FIN DE LA FUNCIÓN
