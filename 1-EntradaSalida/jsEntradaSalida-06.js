/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar() {
  let intNumeroUno = parseInt(txtIdNumeroUno.value);
  let intNumeroDos = parseInt(txtIdNumeroDos.value);
  let total = intNumeroUno + intNumeroDos;
  alert(`la suma es ${total}`);
}
