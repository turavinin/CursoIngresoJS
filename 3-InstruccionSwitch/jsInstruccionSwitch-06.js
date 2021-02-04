function mostrar() {
  let hora = Math.floor(parseFloat(document.getElementById('txtIdHora').value));

  switch (true) {
    case hora >= 7 && hora <= 11:
      alert('Es de mañana');
      break;
    case hora >= 12 && hora <= 19:
      alert('Es de tarde');
      break;
    case (hora >= 20 && hora <= 24) || (hora >= 00 && hora <= 6):
      alert('Es de noche');
      break;
    default:
      alert(`Esa hora no existe`);
      break;
  }
} //FIN DE LA FUNCIÓN
