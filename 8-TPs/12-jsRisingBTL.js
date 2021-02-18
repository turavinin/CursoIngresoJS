/*RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar una carga de datos validada e ingresada por ventanas emergentes solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */
function ComenzarIngreso() {
  // Ingreso y validacion de edad
  let edadEsValida = false;
  let edadIngresada;

  while (edadEsValida == false) {
    edadIngresada = prompt('Ingrese su edad (de 18 a 90 inclusive): ');

    // VALIDACION
    if (edadIngresada == null) {
      // Si se cancela el ingreso
      alert('Se cancelo el ingreso de datos');
      return;
    } else if (
      edadIngresada < 18 ||
      edadIngresada > 90 ||
      isNaN(edadIngresada)
    ) {
      // Si el ingreso es inválido
      alert('Ingreso incorrecto.');
      edadEsValida == false;
      console.log(edadIngresada);
    } else {
      // Si el ingreso es valido
      edadIngresada = parseInt(edadIngresada);
      edadEsValida = true;
    }
  }

  // Ingreso y validacion de sexo
  let sexoIngresado;
  let sexoValido = false;

  while (sexoValido == false) {
    sexoIngresado = prompt('Ingrese su sexo ("M" o "F"): ');

    // VALIDACION
    if (sexoIngresado == null) {
      // Si se cancela el ingreso
      alert('Se cancelo el ingreso de datos');
      return;
    } else if (
      (sexoIngresado.toUpperCase() != 'M' &&
        sexoIngresado.toUpperCase() != 'F') ||
      sexoIngresado == ''
    ) {
      // Si el ingreso es inválido
      alert('Ingreso incorrecto.');
    } else {
      // Si el ingreso es valido
      sexoIngresado = sexoIngresado.toUpperCase();
      sexoValido = true;
    }
  }

  // Ingreso y validacion de Estado Civil
  let estadoCivilIngresado;
  let estadoCivilValido = false;

  do {
    estadoCivilIngresado = prompt(
      'Ingrese su Estado Civil (Soltero: 1, Casado: 2, Divorsiado: 3, Viudo: 4)'
    );

    if (estadoCivilIngresado == null) {
      // Si se cancela el ingreso
      alert('Se cancelo el ingreso de datos');
      return;
    } else if (
      (estadoCivilIngresado != 1 &&
        estadoCivilIngresado != 2 &&
        estadoCivilIngresado != 3 &&
        estadoCivilIngresado != 4) ||
      isNaN(estadoCivilIngresado)
    ) {
      // Si el ingreso es inválido
      alert('Ingreso incorrecto.');
    } else {
      estadoCivilIngresado = parseInt(estadoCivilIngresado);
      estadoCivilValido = true;
    }
  } while (estadoCivilValido == false);

  switch (estadoCivilIngresado) {
    case 1:
      estadoCivilIngresado = 'Soltero';
      break;
    case 2:
      estadoCivilIngresado = 'Casado';
      break;
    case 3:
      estadoCivilIngresado = 'Divorsiado';
      break;
    case 4:
      estadoCivilIngresado = 'Viudo';
      break;
  }

  // Ingreso y validacion de Sueldo Bruto
  let sueldoBruto;
  let sueldoValido = false;

  do {
    sueldoBruto = prompt('Ingrese su sueldo en bruto (no menor a 8000):');

    if (sueldoBruto == null) {
      // Si se cancela el ingreso
      alert('Se cancelo el ingreso de datos');
      return;
    } else if (sueldoBruto < 8000 || isNaN(sueldoBruto)) {
      // Si el ingreso es inválido
      alert('Ingreso incorrecto.');
    } else {
      // Si el ingreso es valido
      sueldoValido = true;
      sueldoBruto = parseFloat(sueldoBruto);
    }
  } while (sueldoValido == false);

  // Ingreso y validacion de Legajo
  let legajo;
  let legajoValido = false;

  do {
    legajo = prompt('Ingrese el numero de legajo (4 digitos): ');

    if (legajo == null) {
      // Si se cancela el ingreso
      alert('Se cancelo el ingreso de datos');
      return;
    } else if (legajo < 1000 || legajo > 9999 || isNaN(legajo)) {
      // Si el ingreso es inválido
      alert('Ingreso incorrecto.');
    } else {
      // Si el ingreso es valido
      legajo = parseInt(legajo, 10);
      console.log(legajo);
      legajoValido = true;
    }
  } while (legajoValido == false);

  // Ingreso y validacion Nacionalidad
  let nacionalidad;
  let nacionalidadValida = false;

  do {
    nacionalidad = prompt(
      'Ingrese nacionalidad (Argentinos: A, Extranjeros: E, Nacionalizados: N'
    );

    if (nacionalidad == null) {
      // Si se cancela el ingreso
      alert('Se cancelo el ingreso de datos');
      return;
    } else if (
      nacionalidad.toUpperCase() != 'A' &&
      nacionalidad.toUpperCase() != 'E' &&
      nacionalidad.toUpperCase() != 'N'
    ) {
      // Si el ingreso es inválido
      alert('Ingreso incorrecto.');
    } else {
      // Si el ingreso es valido
      nacionalidad = nacionalidad.toUpperCase();
      nacionalidadValida = true;
    }
  } while (nacionalidadValida == false);

  switch (nacionalidad) {
    case 'A':
      nacionalidad = 'Argentina';
      break;
    case 'E':
      nacionalidad = 'Extranjera';
      break;
    case 'N':
      nacionalidad = 'Nacionalizado';
      break;
  }

  console.log(nacionalidad);

  document.getElementById('txtIdEdad').value = edadIngresada;
  document.getElementById('txtIdSexo').value = sexoIngresado;
  document.getElementById('txtIdEstadoCivil').value = estadoCivilIngresado;
  document.getElementById('txtIdSueldo').value = sueldoBruto;
  document.getElementById('txtIdLegajo').value = legajo;
  document.getElementById('txtIdNacionalidad').value = nacionalidad;
}
