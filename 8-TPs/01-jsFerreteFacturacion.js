/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/

let precioUno = 0;
let precioDos = 0;
let precioTres = 0;

function ObtenerValores() {
  precioUno = parseInt(document.getElementById('txtIdPrecioUno').value);
  precioDos = parseInt(document.getElementById('txtIdPrecioDos').value);
  precioTres = parseInt(document.getElementById('txtIdPrecioTres').value);
}

function Sumar() {
  ObtenerValores();

  let sumaPrecios = precioUno + precioDos + precioTres;

  alert(`La suma es: ${sumaPrecios}$`);
}
function Promedio() {
  ObtenerValores();

  let promedioPrecios = (precioUno + precioDos + precioTres) / 3;

  alert(`El promedio es: ${promedioPrecios}$`);
}
function PrecioFinal() {
  ObtenerValores();

  let sumaPrecios = precioUno + precioDos + precioTres;
  let precioFinalMasIva21 = sumaPrecios + (21 / 100) * sumaPrecios;

  alert(`El precio final mas 21% IVA es: ${precioFinalMasIva21}$`);
}
