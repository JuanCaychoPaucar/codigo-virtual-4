/**
 * Realice un algoritmo para determinar si una persona puede votar
 * con base en su edad en las próximas elecciones. Construya el diagrama
 * de flujo, el pseudocódigo y el diagrama N/S.
 */

let edad = +prompt("Ingrese la edad");
console.log(`Edad = ${edad} años`);

if (edad >= 18) {
  console.log("Puede votar");
} else {
  console.log("No puede votar");
}
