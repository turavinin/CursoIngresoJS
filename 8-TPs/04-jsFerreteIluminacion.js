/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
  // Almacenar en variable integer de cantidad de lamparitas
  let cantidadLampartias = parseInt(document.getElementById("txtIdCantidad").value);
  // Almacenar en variable la eleccion de empresa de lampartias
  let empresa = document.getElementById('Marca').value;
  // Almacenar en variable el campo value de precio con descuento
  let campoPrecioDescuento = document.getElementById("txtIdprecioDescuento");
  // Almacenar en variable el precio base de lamparita
  let precioBase = 35 * cantidadLampartias;
  // Declarar variable precio con descuento
  let precioConDescuento;
  // Declarar varialbe desde impuestos
  let impuestos; 

  // If => cantidad de lampartias > 6 => total - 50%
  if (cantidadLampartias >= 6) {
    precioConDescuento = precioBase - precioBase * 0.5;
  }

  // Switch (key => cantidad lampartias)
  switch (cantidadLampartias) {
    case 5:
      switch (empresa) {
        case "ArgentinaLuz":
          precioConDescuento = precioBase - precioBase * 0.4;
          break;
        default:
          precioConDescuento = precioBase - precioBase * 0.3;
          break;
      }
      break;

    case 4:
      switch (empresa) {
        case "ArgentinaLuz":
        case "FelipeLamparas":
          precioConDescuento = precioBase - precioBase * 0.25;
          break;
        default:
          precioConDescuento = precioBase - precioBase * 0.20;
          break;
      }
      break;

    case 3:
        switch (empresa) {
          case 'ArgentinaLuz':
            precioConDescuento = precioBase - precioBase * 0.15;
            break;
          case 'FelipeLamparas':
            precioConDescuento = precioBase - precioBase * 0.10;
            break;
          default:
            precioConDescuento = precioBase - precioBase * 0.05;
        }
        break;

      default:
        precioConDescuento = precioBase;
        break;
  }

  // if => importe final + descuento > 120 => +10% (alert esa cantidad de impuesto) 
  if (precioConDescuento > 120) {
    impuestos = precioConDescuento * 0.1;
    campoPrecioDescuento.value = (precioConDescuento + impuestos).toFixed(2);

    alert(`De IIBB usted pagó ${impuestos}`);
  }
  else {
    campoPrecioDescuento.value = precioConDescuento.toFixed(2);
  }
}
