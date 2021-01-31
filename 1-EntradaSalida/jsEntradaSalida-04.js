/* 
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
function mostrar() {
  let inputId = document.getElementById('txtIdNombre');
  inputId.value = prompt('Escribir mensaje');

  alert(inputId.value);
}
