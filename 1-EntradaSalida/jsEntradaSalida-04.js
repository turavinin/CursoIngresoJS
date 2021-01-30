/* 
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
function mostrar() {
  let mensaje = prompt('Escribir mensaje');
  txtIdNombre.value = mensaje;

  alert(txtIdNombre.value);
}
