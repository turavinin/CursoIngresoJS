function mostrar() {
  let mes = document.getElementById('txtIdMes').value;

  switch (mes) {
    case 'Febrero':
      alert(`${mes} tiene 28 días`);
      break;
    case 'Abril':
    case 'Junio':
    case 'Septiembre':
    case 'Noviembre':
      alert(`${mes} tiene 30 días`);
      break;
    default:
      alert(`${mes} tiene 31 días`);
      break;
  }
} //FIN DE LA FUNCIÓN
