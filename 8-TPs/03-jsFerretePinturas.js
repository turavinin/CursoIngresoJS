/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
let temperatura = 0;

function ObtenerValores() {
  temperatura = parseFloat(document.getElementById('txtIdTemperatura').value);
}

function FahrenheitCentigrados() {
  ObtenerValores();
  let fahrenheit = temperatura;
  let centigrados = ((fahrenheit - 32) * 5) / 9;

  alert(`La temperatura de ${fahrenheit}°F equivale a ${centigrados}°C.`);
}

function CentigradosFahrenheit() {
  ObtenerValores();
  let centigrados = temperatura;
  let fahrenheit = (centigrados * 9) / 5 + 32;

  alert(`La temperatura de ${centigrados}°C equivale a ${fahrenheit}°F.`);
}
