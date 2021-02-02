/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/

function mostrarAumento() {
  let sueldo = parseFloat(document.getElementById('txtIdSueldo').value);

  let sueldoMasDiezProciento = sueldo + 0.1 * sueldo;
  txtIdResultado.value = sueldoMasDiezProciento;
  alert('ok');
}
