/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento() {
  let intSueldo = parseInt(document.getElementById('txtIdSueldo').value);
  let sueldoMasDiezProciento = intSueldo + (10 / 100) * intSueldo;
  txtIdResultado.value = sueldoMasDiezProciento;
  alert('ok');
}
