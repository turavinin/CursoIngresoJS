function mostrar() {
  let hora = parseFloat(document.getElementById('txtIdHora').value);

  switch (Math.floor(hora)) {
    case 7:
    case 8:
    case 9:
    case 10:
    case 11:
      alert(`Es de mañana.`);
      break;
    default:
      alert(`NO es de mañana`);
      break;
  }
} //FIN DE LA FUNCIÓN
