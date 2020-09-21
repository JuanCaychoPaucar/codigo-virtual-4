/**
 * Realice el diagrama de flujo y pseudocódigo que representen el algoritmo
 * para determinar el promedio que obtendrá un alumno considerando
 * que realiza tres exámenes, de los cuales el primero y el
 * segundo tienen una ponderación de 25%, mientras que el tercero
 * de 50%.
 */

let examen1 = +prompt("Ingrese nota del examen 1");
let examen2 = +prompt("Ingrese nota del examen 2");
let examen3 = +prompt("Ingrese nota del examen 3");

let promedio = examen1 * 0.25 + examen2 * 0.25 + examen3 * 0.5;

console.log("PROMEDIO PONDERADO");
console.log(`Examen 1 = ${examen1}`);
console.log(`Examen 2 = ${examen2}`);
console.log(`Examen 3 = ${examen3}`);
console.log(`Promedio = ${promedio}`);
