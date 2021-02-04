function mostrar() {
  let mes = document.getElementById('txtIdMes').value;

  switch (mes) {
    case 'Enero':
    case 'Febrero':
    case 'Marzo':
    case 'Abril':
    case 'Mayo':
    case 'Junio':
      alert('Falta para el invierno.');
      break;
    case 'Septiembre':
    case 'Octubre':
    case 'Noviembre':
    case 'Dicimebre':
      alert('Ya pasamos el frio, ahora calor!!!');
      break;
    default:
      alert('Abrigate que hace frio');
      break;
  }
} //FIN DE LA FUNCIÓN
