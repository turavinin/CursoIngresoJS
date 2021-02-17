function mostrar() {
  // Almacenar estacion en variable
  let estacion = document.getElementById('txtIdEstacion').value;
  // Almacenar destino en variable
  let destino = document.getElementById('txtIdDestino').value;
  // Almacenar en variable precio de estadía base
  let precioBase = 15000;
  // Almacenar precio base + 20%
  let precioMas20 = precioBase + precioBase * 0.2;
  // Almacenar precio base - 20&
  let precioMenos20 = precioBase - precioBase * 0.2;
  // Almacenar precio base + 10%
  let precioMas10 = precioBase + precioBase * 0.1;
  // Almacenar precio base - 10%
  let precioMenos10 = precioBase - precioBase * 0.1;

  // Metodo SWITCH
  // Dentro otro SWITHC

  switch (estacion) {
    case 'Invierno':
      {
        switch (destino) {
          case 'Bariloche':
            alert(
              `Destino de ${destino} en ${estacion}, el precio es \$${precioMas20}`
            );
            break;

          case 'Mar del plata':
            alert(
              `Para el destino de ${destino} en ${estacion}, el precio es \$${precioMenos20}`
            );
            break;

          default:
            alert(
              `Para el destino de ${destino} en ${estacion}, el precio es \$${precioMenos10}`
            );
        }
      }
      break;

    case 'Verano':
      {
        switch (destino) {
          case 'Bariloche':
            alert(
              `Destino de ${destino} en ${estacion}, el precio es \$${precioMenos20}`
            );
            break;

          case 'Mar del plata':
            alert(
              `Para el destino de ${destino} en ${estacion}, el precio es \$${precioMas20}`
            );
            break;

          default:
            alert(
              `Para el destino de ${destino} en ${estacion}, el precio es \$${precioMas10}`
            );
        }
      }
      break;

    case 'Otoño':
    case 'Primavera': {
      switch (destino) {
        case 'Cordoba':
          alert(
            `Para el destino de ${destino} en ${estacion}, el precio es \$${precioBase}`
          );
          break;

        default:
          alert(
            `Para el destino de ${destino} en ${estacion}, el precio es \$${precioMas10}`
          );
      }
    }
  }
}
//FIN DE LA FUNCIÓN
