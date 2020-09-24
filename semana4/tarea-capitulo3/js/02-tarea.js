/**
 * Realice un algoritmo para determinar el sueldo semanal de un trabajador
 * con base en las horas trabajadas y el pago por hora, considerando
 * que después de las 40 horas cada hora se considera como
 * excedente y se paga el doble. Construya el diagrama de flujo, el
 * pseudocódigo y el diagrama N/S.
 */

let sueldo = 0;
let horasTrabajadas = 41;
let pagoHora = 10;

if (horasTrabajadas > 40) {
  sueldo = 40 * pagoHora + (horasTrabajadas - 40) * 2 * pagoHora;
} else {
  sueldo = horasTrabajadas * pagoHora;
}

console.log(`Horas trabajadas = ${horasTrabajadas}`);
console.log(`Pago x hora = ${pagoHora}`);
console.log(`Sueldo = ${sueldo}`);
