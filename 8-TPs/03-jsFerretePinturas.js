/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
let temperatura = 0;

function ObtenerValores() {
  temperatura = document.getElementById('txtIdTemperatura').value;
}

function FahrenheitCentigrados() {
  ObtenerValores();
  let centigrados = ((temperatura - 32) * 5) / 9;

  alert(`La temperatura de ${temperatura}°F equivale a ${centigrados}°C.`);
}

function CentigradosFahrenheit() {
  ObtenerValores();
  let fahrenheit = (temperatura * 9) / 5 + 32;

  alert(`La temperatura de ${temperatura}°C equivale a ${fahrenheit}°F.`);
}
