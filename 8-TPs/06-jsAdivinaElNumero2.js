/*En esta oportunidad el juego evaluará tus
 aptitudes a partir de la cantidad de intentos, 
 por lo cual se informará lo siguiente:
1° intento: “usted es un Psíquico”.
2° intento: “excelente percepción”.
3° intento: “Esto es suerte”.
4° intento: “Excelente técnica”.
5° intento: “usted está en la media”.
Desde  6 Intentos hasta 10:”falta técnica”
Más de 10 intentos: “afortunado en el amor!!”.*/

let numeroSecreto;
let numeroIntentos = 0;

function comenzar() {
  numeroSecreto = Math.floor(Math.random() * 100) + 1;
  console.log(`Numero secreto: ${numeroSecreto}`);
}

function verificar() {
  // Almacenar numero elegido
  let numeroElegido = parseInt(document.getElementById('txtIdNumero').value);

  // Sumar un intento
  numeroIntentos++;
  document.getElementById('txtIdIntentos').value = numeroIntentos;

  if (numeroElegido == numeroSecreto) {
    switch (numeroIntentos) {
      case 1:
        alert('Acertó! Usted es un psíquico!');
        break;
      case 2:
        alert('Acertó! Excelente percepción!');
        break;
      case 3:
        alert('Acertó! Esto es suerte!');
        break;
      case 4:
        alert('Acertó! Excelente técnica!');
        break;
      case 5:
        alert('Acertó! Usted esta en la media!');
        break;
      case 6:
      case 7:
      case 8:
      case 9:
      case 10:
        alert('Acertó! Falta técnica!');
        break;
      default:
        alert('Acertó! Afortunado en el amor!');
    }
  } else if (numeroElegido > numeroSecreto) {
    alert(`Esta por debajo del numero...`);
  } else {
    alert(`Se pasó del numero`);
  }

  console.log(`Numero secreto: ${numeroSecreto}`);
  console.log(`Numero intentos: ${numeroIntentos}`);
}
