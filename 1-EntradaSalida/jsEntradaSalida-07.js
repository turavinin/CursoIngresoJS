/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/

function sumar() {
  let numerUno = parseInt(document.getElementById('txtIdNumeroUno').value);
  let numerDos = parseInt(document.getElementById('txtIdNumeroDos').value);
  let total = numerUno + numerDos;
  alert(`la suma es ${total}`);
}

function restar() {
  let numerUno = parseInt(document.getElementById('txtIdNumeroUno').value);
  let numerDos = parseInt(document.getElementById('txtIdNumeroDos').value);
  let total = numerUno - numerDos;
  alert(`la resta es ${total}`);
}

function multiplicar() {
  let numerUno = parseInt(document.getElementById('txtIdNumeroUno').value);
  let numerDos = parseInt(document.getElementById('txtIdNumeroDos').value);
  let total = numerUno * numerDos;
  alert(`la multiplicación es ${total}`);
}

function dividir() {
  let numerUno = parseInt(document.getElementById('txtIdNumeroUno').value);
  let numerDos = parseInt(document.getElementById('txtIdNumeroDos').value);

  // Si se dvidie por cero y no se maneja el error, en javascript se devulete "infinity" => se tiene que validar.
  let total = numerUno / numerDos;
  alert(`la división es ${total}`);
}
