/**
 * Se requiere un algoritmo para determinar cuánto ahorrará en pesos
 * una persona diariamente, y en un año, si ahorra 3¢ el primero de
 * enero, 9¢ el dos de enero, 27¢ el 3 de enero y así sucesivamente
 * todo el año. Represente la solución mediante el diagrama de flujo,
 * el pseudocódigo y el diagrama N/S, utilizando el ciclo apropiado.
 */

let ahorroTotal = 0;
let ahorroDiario = 0;

console.log("AHORRO DURANTE 1 AÑO");

for (let i = 1; i <= 365; i++) {
  ahorroDiario = 3 ** i;
  ahorroTotal = ahorroTotal + ahorroDiario;
  console.log(`Dia ${i} = ${ahorroDiario}`);
}

console.log(`Total ahorrado = ${ahorroTotal}`);
