function mostrar() {
  //tomo el mes
  let mes = document.getElementById('txtIdMes').value;

  switch (mes) {
    case 'Enero':
      alert('Qué comiences bien el año!!');
      break;
    case 'Marzo':
      alert('A clases!!');
      break;
    case 'Julio':
      alert('Se vienen las vacaciones!!');
      break;
    case 'Diciembre':
      alert('Felices fiestas!!');
      break;
    default:
      alert('Mes comun');
      break;
  }
} //FIN DE LA FUNCIÓN
