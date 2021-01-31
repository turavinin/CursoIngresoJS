/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento() {
  let intImporte = parseInt(document.getElementById('txtIdImporte').value);
  let importeMenos25Prociento = intImporte - (25 / 100) * intImporte;
  txtIdResultado.value = importeMenos25Prociento;
  alert('ok');
}
