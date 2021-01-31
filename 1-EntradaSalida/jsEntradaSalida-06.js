/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar() {
  let inputNumeroUno = document.getElementById('txtIdNumeroUno');
  let inputNumeroDos = document.getElementById('txtIdNumeroDos');

  let intNumeroUno = parseInt(inputNumeroUno.value);

  let intNumeroDos = parseInt(inputNumeroDos.value);
  let total = intNumeroUno + intNumeroDos;
  alert(`la suma es ${total}`);
}
