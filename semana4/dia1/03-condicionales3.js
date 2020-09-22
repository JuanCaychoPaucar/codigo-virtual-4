/**
 * Calcular el mayor de 3 numeros
 * asumiendo que son diferentes todos
 * y mostrarlo en la consola
 * Los numeros pueden ser ingresados por el usuario
 * o declarados al inicio del programa
 */

const nro1 = 20;
const nro2 = 23;
const nro3 = 10;

let menor = nro1;
let mayor = nro1;

if (nro2 < menor) {
  menor = nro2;
} else {
  if (nro3 < menor) {
    menor = nro3;
  }
}

if (mayor < nro2) {
  mayor = nro2;
} else {
  if (mayor < nro3) {
    mayor = nro3;
  }
}

console.log(`Mayor : ${mayor}`);
console.log(`Menor : ${menor}`);
