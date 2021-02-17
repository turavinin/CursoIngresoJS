/* Enunciado:

Debemos realizar la carga de 5(cinco) productos de prevención de contagio,
de cada una debo obtener los siguientes datos:
el tipo (validar "barbijo" , "jabón" o "alcohol") ,
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
la Marca y el fabricante.
Se debe Informar al usuario lo siguiente:
a) Del más barato de los alcohol, la cantidad de unidades y el fabricante
b) Del tipo con mas unidades, el promedio por compra
c) Cuántas unidades de jabones hay en total */

function mostrar() {
  // TIPO DE PRODUCTO
  // Almacenar en variable el tipo de productio
  let tipoProducto = prompt(
    'Ingrese el tipo de producto (barbijo / jabon / alcohol):'
  );
  // Validar tipo de producto
  while (
    tipoProducto != 'barbijo' ||
    tipoProducto != 'jabon' ||
    tipoProducto != 'alcohol'
  ) {
    tipoProducto = prompt(
      'Producto incorrecto. Ingrese de nuevo (barbijo / jabon / alcohol):'
    );
  }

  // Almacenar en variable el precio del producto
  let precioProducto = 0;
  // Almacenar en variable la cantidad de unidades
  let cantidadProducto = 0;
  // Almacenar en variable la marca del producto
  let marcaProducto = '';
  // Almacenar en variable el fabricante del producto
  let fabricanteProducto = '';
}
