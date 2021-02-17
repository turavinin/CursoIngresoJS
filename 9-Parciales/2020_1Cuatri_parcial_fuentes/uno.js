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
  // ITINERAR 5 VECES
  for (let i = 0; i < 2; i++) {
    // TIPO DE PRODUCTO
    // Almacenar en variable el tipo de productio
    let tipoProducto = prompt(
      'Ingrese el tipo de producto (barbijo / jabon / alcohol):'
    );
    // Validar tipo de producto
    while (
      tipoProducto != 'barbijo' &&
      tipoProducto != 'jabon' &&
      tipoProducto != 'alcohol' &&
      tipoProducto != null
    ) {
      tipoProducto = prompt(
        'Producto incorrecto. Ingrese de nuevo (barbijo / jabon / alcohol):'
      );
    }

    // PRECIO DE PRODUCTO
    // Almacenar en variable el precio del producto
    let precioProducto = parseFloat(
      prompt('Ingrese el precio del producto (entre 100 y 300):')
    );
    // Validar precio de producto
    while (precioProducto < 100 || precioProducto > 300) {
      precioProducto = parseFloat(
        prompt(
          'Precio incorrecto. Ingrese el precio del producto (entre 100 y 300):'
        )
      );
    }

    // CANTIDAD DE UNIDADES
    // Almacenar en variable la cantidad de unidades
    let cantidadProducto = parseInt(
      prompt(
        'Ingrese cantidad de unidades (No puede ser menor a 0 o mayor a 1000):'
      )
    );
    // Validar cantidad de unidades
    while (cantidadProducto <= 0 || cantidadProducto > 1000) {
      cantidadProducto = parseInt(
        prompt('Cantidad incorrecta. Ingrese de nuevo:')
      );
    }

    // MARCA DE PRODUCTO
    // Almacenar en variable la marca del producto
    let marcaProducto = prompt('Ingrese la marca del producto: ');

    // FABRICANTE DE PRODUCTO
    // Almacenar en variable el fabricante del producto
    let fabricanteProducto = prompt('Ingrese el fabricante del producto');
  }
}
