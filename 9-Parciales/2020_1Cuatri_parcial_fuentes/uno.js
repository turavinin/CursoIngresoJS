/* Enunciado:

Debemos realizar la carga de 5(cinco) productos de prevención de contagio,
de cada una debo obtener los siguientes datos:
	el tipo (validar "barbijo" , "jabón" o "alcohol"),
	el precio (validar entre 100 y 300),
	la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
	la Marca y el fabricante.

Se debe Informar al usuario lo siguiente:
a) Del más barato de los alcohol, la cantidad de unidades y el fabricante
b) Del tipo con mas unidades, el promedio por compra
c) Cuántas unidades de jabones hay en total */

function mostrar() {
  // ALCOHOL CON MENOS UNIDADES
  // Crear variable que alamacene el precio del alcohol más barato
  let precioAlcoholMasBarato = 0;
  // Crear variable que almaecene la unidades del alcohol más barato
  let unidadesAlcoholMasBarato = 0;
  // Crear variable que almacene al fabricante de alcohol con menos unidades
  let fabricanteDeAlcoholMasBarato;

  // TIPO CON MAS UNIDADES
  // Crear variables para almacenar el total de unidades de cada tipo
  // Barbijo
  let unidadesTotalBarbijo = 0;
  // Jabon
  let unidadesTotalJabon = 0;
  // Alcohol
  let unidadesTotalAlcohol = 0;

  // Crear variables para almacenar el precio total de cada tipo
  // Barbijo
  let precioTotalBarbijo = 0;
  // Jabon
  let precioTotalJabon = 0;
  // Alcohol
  let precioTotalAlcohol = 0;

  // Crear variables contandoras de cantidades de cada tipo
  // Barbijo
  let contadorBarbijo = 0;
  // Jabon
  let contadorJabon = 0;
  // Alcohol
  let contadorAlcohol = 0;

  // Crear variable que almacene el tipo con mayor unidades
  let tipoConMasUnidades;
  // Crear variable que almacene el tipo con mayor unidades
  let promedioDelMayorTipo;

  // LOOP 5 VECES
  for (let i = 0; i < 5; i++) {
    // Almacenar los tipos de productos a validar
    let tipoBarbijo = 'barbijo';
    let tipoJabon = 'jabón';
    let tipoAlcohol = 'alcohol';

    // Almacenar numero de producto
    let numeroDeProducto = `${i + 1}° Producto.`;

    // Almacenar en variable el tipo de producto
    let tipoDeProducto;
    let tipoValido = false;

    while (tipoValido == false) {
      tipoDeProducto = prompt(
        `${numeroDeProducto} Ingrese el tipo de producto (Barbijo, Alcohol, Jabón)`
      );

      if (tipoDeProducto == null) {
        // Si se cancela el prompt
        alert('Se cancelo la carga de productos');
        return;
      } else if (
        tipoDeProducto.toLowerCase() != tipoBarbijo &&
        tipoDeProducto.toLowerCase() != tipoAlcohol &&
        tipoDeProducto.toLowerCase() != tipoJabon
      ) {
        // Si el ingreso no es válido
        alert('Ingreso incorrecto. Revise ortografía y vuelva a intentarlo.');
      } else {
        tipoDeProducto = tipoDeProducto.toLowerCase();
        tipoValido = true;
      }
    }

    // Almacenar en variable el precio de producto
    let precioDeProducto = 0;
    let precioValido = false;

    while (precioValido == false) {
      precioDeProducto = prompt(
        `${numeroDeProducto} Ingrese el precio (Entre 100 y 300 inclusive)`
      );

      if (precioDeProducto == null) {
        // Si se cancela el prompt
        alert('Se canceló la carga de productos.');
        return;
      } else if (
        precioDeProducto < 100 ||
        precioDeProducto > 300 ||
        isNaN(precioDeProducto)
      ) {
        // Si se ingreso un precio inválido o no un numero
        alert('Ingreso incorrecto. Intente de nuevo.');
      } else {
        // Si el ingreso es válido.
        precioDeProducto = parseFloat(precioDeProducto);
        precioValido = true;
      }
    }

    // Almacenar en variable las unidades de producto
    let unidadesProducto;
    let unidadValida = false;

    while (unidadValida == false) {
      unidadesProducto = prompt(
        `${numeroDeProducto} Ingrese unidades (Mayor a 0 y menor a 1000)`
      );

      if (unidadesProducto == null) {
        // Si se cancela el prompt
        alert('Se canceló la carga de productos.');
        return;
      } else if (
        unidadesProducto <= 0 ||
        unidadesProducto >= 1000 ||
        isNaN(unidadesProducto)
      ) {
        // Si se ingreso un precio inválido o no un numero
        alert('Ingreso incorrecto. Intente de nuevo.');
      } else {
        // Si el ingreso es válido.
        unidadesProducto = parseInt(unidadesProducto);
        unidadValida = true;
      }
    }

    // Almacenar en variable la marca de producto
    let marcaProducto;
    let marcaValida = false;

    while (marcaValida == false) {
      marcaProducto = prompt(
        `${numeroDeProducto} Ingrese la marca del producto.`
      );

      if (marcaProducto == null) {
        // Si se cancela el prompt
        alert('Se canceló la carga de productos.');
        return;
      } else if (marcaProducto == '') {
        // Si se ingreso un precio inválido o no un numero
        alert('Ingreso incorrecto. Intente de nuevo.');
      } else {
        marcaProducto = marcaProducto.toLowerCase();
        marcaValida = true;
      }
    }

    // Almacenar en variable el fabricante de producto
    let fabricanteProducto;
    let fabricanteValido = false;

    while (fabricanteValido == false) {
      fabricanteProducto = prompt(
        `${numeroDeProducto} Ingrese el fabricante del producto`
      );

      if (fabricanteProducto == null) {
        // Si se cancela el prompt
        alert('Se canceló la carga de productos.');
        return;
      } else if (fabricanteProducto == '') {
        // Si se ingreso un precio inválido o no un numero
        alert('Ingreso incorrecto. Intente de nuevo.');
      } else {
        fabricanteProducto = fabricanteProducto.toLowerCase();
        fabricanteValido = true;
      }
    }

    // LOGICA
    if (tipoDeProducto == tipoAlcohol) {
      // Contador alcohol++
      contadorAlcohol++;
      // Unidades total tipo alcohol += unidades de producto
      unidadesTotalAlcohol += unidadesProducto;
      // precio total tipo alcohol += precio de producto
      precioTotalAlcohol += precioDeProducto;

      if (precioAlcoholMasBarato == 0) {
        precioAlcoholMasBarato = precioDeProducto;
        unidadesAlcoholMasBarato = unidadesProducto;
        fabricanteDeAlcoholMasBarato = fabricanteProducto;
      } else if (precioDeProducto < precioAlcoholMasBarato) {
        precioAlcoholMasBarato = precioDeProducto;
        unidadesAlcoholMasBarato = unidadesProducto;
        fabricanteDeAlcoholMasBarato = fabricanteProducto;
      }
    } else if (tipoDeProducto == tipoJabon) {
      // Contador jabon++
      contadorJabon++;
      // Unidades total tipo jabon += unidades de producto
      unidadesTotalJabon += unidadesProducto;
      // precio total tipo jabon += precio de producto
      precioTotalJabon += precioDeProducto;
    } else {
      // Contador barbijo++
      contadorBarbijo++;
      // Unidades total tipo jabon += unidades de producto
      unidadesTotalBarbijo += unidadesProducto;
      // precio total tipo jabon += precio de producto
      precioTotalBarbijo += precioDeProducto;
    }

    console.log('Contador:' + i);
  }

  if (
    unidadesTotalAlcohol > unidadesTotalBarbijo &&
    unidadesTotalAlcohol > unidadesTotalJabon
  ) {
    tipoConMasUnidades = 'Alcohol';
    promedioDelMayorTipo = unidadesTotalAlcohol / precioTotalAlcohol;
  } else if (
    unidadesTotalJabon > unidadesTotalAlcohol &&
    unidadesTotalJabon > unidadesTotalBarbijo
  ) {
    tipoConMasUnidades = 'Jabón';
    promedioDelMayorTipo = unidadesTotalJabon / precioTotalJabon;
  } else {
    tipoConMasUnidades = 'Barbijo';
    promedioDelMayorTipo = unidadesTotalBarbijo / precioTotalBarbijo;
  }

  // MENSAJES AL USUARIO
  alert(
    `El alcohol más barato tiene ${unidadesAlcoholMasBarato} unidades, y es del fabricante ${fabricanteDeAlcoholMasBarato}.`
  );

  alert(
    `El tipo de producto con más unidades es ${tipoConMasUnidades} y su promedio de compra es ${promedioDelMayorTipo}.`
  );

  alert(`El total de jabones es de ${unidadesTotalJabon}.`);
}
