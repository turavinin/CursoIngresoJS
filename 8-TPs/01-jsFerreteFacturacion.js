/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/

function Sumar() {
  let precioUno = parseInt(document.getElementById('txtIdPrecioUno').value);
  let precioDos = parseInt(document.getElementById('txtIdPrecioDos').value);
  let precioTres = parseInt(document.getElementById('txtIdPrecioTres').value);
  let sumaPrecios = precioUno + precioDos + precioTres;

  alert(`La suma es: ${sumaPrecios}$`);
}
function Promedio() {
  let precioUno = parseInt(document.getElementById('txtIdPrecioUno').value);
  let precioDos = parseInt(document.getElementById('txtIdPrecioDos').value);
  let precioTres = parseInt(document.getElementById('txtIdPrecioTres').value);
  let promedioPrecios = (precioUno + precioDos + precioTres) / 3;

  alert(`El promedio es: ${promedioPrecios}$`);
}
function PrecioFinal() {
  let precioUno = parseInt(document.getElementById('txtIdPrecioUno').value);
  let precioDos = parseInt(document.getElementById('txtIdPrecioDos').value);
  let precioTres = parseInt(document.getElementById('txtIdPrecioTres').value);

  let sumaPrecios = precioUno + precioDos + precioTres;
  let precioFinalMasIva21 = sumaPrecios + (21 / 100) * sumaPrecios;

  alert(`El precio final mas 21% IVA es: ${precioFinalMasIva21}$`);
}
