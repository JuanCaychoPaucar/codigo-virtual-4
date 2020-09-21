/**
 * Una empresa que contrata personal requiere determinar la edad de
 * las personas que solicitan trabajo, pero cuando se les realiza la entrevista
 * sólo se les pregunta el año en que nacieron. Realice el diagrama
 * de flujo y pseudocódigo que representen el algoritmo para solucionar este problema.
 */

let aNacimiento = +prompt("Ingrese año de nacimiento");
let aActual = 2020;
let edad = aActual - aNacimiento;

console.log(
  `CALCULO DE EDAD ACTUAL\nAño de nacimiento : ${aNacimiento}\nAño actual : ${aActual}\nEdad: ${edad} años`
);
