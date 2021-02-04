function mostrar() {
  // Almacenar estacion en variable
  let estacion = document.getElementById('txtIdEstacion').value;
  // Almacenar destino en variable
  let destino = document.getElementById('txtIdDestino').value;

  switch (estacion) {
    case 'Invierno':
      {
        switch (destino) {
          case 'Bariloche':
            alert('Se viaja');
            break;

          default:
            alert('No se viaja');
            break;
        }
      }
      break;

    case 'Verano':
      {
        switch (destino) {
          case 'Mar del plata':
          case 'Cataratas':
            alert('Se viaja');
            break;

          default:
            alert('No se viaja');
            break;
        }
      }
      break;

    case 'Primavera':
      {
        switch (destino) {
          case 'Bariloche':
            alert('No se viaja');
            break;

          default:
            alert('Se viaja');
            break;
        }
      }
      break;

    default:
      alert('Se viaja');
      break;
  }
} //FIN DE LA FUNCIÓN
