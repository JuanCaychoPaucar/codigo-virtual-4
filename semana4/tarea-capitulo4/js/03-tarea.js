/**
 * Se requiere un algoritmo para determinar, de N cantidades, cuántas
 * son cero, cuántas son menores a cero, y cuántas son mayores a cero.
 * Realice el diagrama de flujo, el pseudocódigo y el diagrama N/S para
 * representarlo, utilizando el ciclo apropiado.
 */

let arreglo = [];
let z = 0;
let positivos = 0;
let negativos = 0;

let cantidad = +prompt("Cuantos números ingresará ?");

for (let i = 0; i < cantidad; i++) {
  let numero = +prompt(`Ingrese número ${i + 1} de ${cantidad}`);
  arreglo.push(numero);
  if (numero < 0) {
    negativos++;
  } else {
    if (numero > 0) {
      positivos++;
    } else {
      z++;
    }
  }
}

console.log(arreglo);
console.log(`Iguales a 0 = ${z}`);
console.log(`Menores a 0 = ${negativos}`);
console.log(`Mayores a 0 = ${positivos}`);
