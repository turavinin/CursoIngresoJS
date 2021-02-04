function mostrar() {
  let lugar = document.getElementById('txtIdDestino').value;

  switch (lugar) {
    case 'Bariloche':
      alert('Frio');
      break;
    case 'Cataratas':
      alert('Calor');
      break;
    case 'Mar del plata':
      alert('Calor');
      break;
    case 'Ushuaia':
      alert('Frio');
      break;
  }
} //FIN DE LA FUNCIÓN
