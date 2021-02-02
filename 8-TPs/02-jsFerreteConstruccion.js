/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

// Inicializacion de variables
const PI = 3.14;
let largoTerreno = 0;
let anchoTerreno = 0;
let radioTerreno = 0;

// Funcion para cargar los valores en cada OnClick
function ObtenerValores() {
  largoTerreno = parseInt(document.getElementById('txtIdLargo').value);
  anchoTerreno = parseInt(document.getElementById('txtIdAncho').value);
  radioTerreno = parseInt(document.getElementById('txtIdRadio').value);
}

function Rectangulo() {
  ObtenerValores();

  let largoUnHilo = (largoTerreno + anchoTerreno) * 2;
  let largoTresHilos = largoUnHilo * 3;

  alert(
    `Para terreno rectangular es necesario ${largoTresHilos} mts de alambre `
  );
}

function Circulo() {
  ObtenerValores();

  let circunferencia = radioTerreno * 2 * PI;
  let largoTresHilo = circunferencia * 3;

  alert(
    `Para alamabrar el terreno circular es necesario un alambre de ${largoTresHilo} mts.`
  );
}
function Materiales() {
  ObtenerValores();

  let cementoPorMetro = 2;
  let calPorMetro = 3;

  let totalCemento = cementoPorMetro * anchoTerreno * largoTerreno;
  let totalCal = calPorMetro * anchoTerreno * largoTerreno;

  alert(
    `Para el contrapiso son necesarias ${totalCemento} bolsas de cemento y ${totalCal} bolsas de cal.`
  );
}
