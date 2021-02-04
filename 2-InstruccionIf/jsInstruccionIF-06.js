function mostrar() {
  //tomo la edad
  let edad = parseInt(document.getElementById('txtIdEdad').value);

  if (edad < 13) {
    alert('La persona es un niño');
  } else if (edad < 18) {
    alert('La persona es un adolescente');
  } else {
    alert('La persona es un adulto');
  }
} //FIN DE LA FUNCIÓN
