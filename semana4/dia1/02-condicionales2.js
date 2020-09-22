/**
 * Calcular el indice de masa corporal
 * e indicar si una persona se encuentra con sobrepeso
 * de acuerdo a la siguiente tabla
 *
 * 15 o menos : delgadez
 * 15 y 25 : peso ideal
 * 25 a mas : sobrepeso
 *
 * formula IMC
 * imc = peso (kg) / altura al cuadrado (m)
 */

let peso = +prompt("Ingrese su peso en Kg");
let altura = +prompt("Ingrese su altura en metros");
const imc = peso / altura ** 2;
console.log(imc);

if (imc <= 15) {
  console.log("El paciente presenta delgadez 💀");
} else {
  if (imc > 25) {
    console.log("El paciente presenta sobrepeso 🐷");
  } else {
    console.log("El paciente presenta peso ideal 😁");
  }
}
