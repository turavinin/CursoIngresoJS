/*
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar() {
  let mensajeConcatenado = `Usted se llama ${txtIdNombre.value} y tiene ${txtIdEdad.value} años`;
  alert(mensajeConcatenado);
}
