/**
 * Realice un diagrama de flujo y pseudocódigo que representen el algoritmo
 * para determinar cuánto dinero ahorra una persona en un
 * año si considera que cada semana ahorra 15% de su sueldo (considere
 * cuatro semanas por mes y que no cambia el sueldo).
 */

let sueldo = +prompt("Ingrese sueldo mensual");
let ahorro = sueldo * 0.6;
let ahorroTotal =ahorro * 12;

console.log("AHORRO ANUAL");
console.log(`Sueldo = S/ ${sueldo}`);
console.log(`Ahorro mensual = S/ ${ahorro}`);
console.log(`Ahorro anual = S/ ${ahorroTotal}`);

