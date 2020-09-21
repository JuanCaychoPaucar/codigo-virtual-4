/**
 * La compañía de autobuses “La curva loca” requiere determinar el costo
 * que tendrá el boleto de un viaje sencillo, esto basado en los kilómetros
 * por recorrer y en el costo por kilómetro. Realice un diagrama de
 * flujo y pseudocódigo que representen el algoritmo para tal fin.
 */

let kilometrosRecorrer = +prompt("Ingrese cantidad a recorrer en Km");
let costoKilometro = +prompt("Ingrese costo por Km");
let total = kilometrosRecorrer * costoKilometro;

console.log("COMPAÑIA DE AUTOBUSES - COSTO");
console.log(`Recorrido = ${kilometrosRecorrer} Km`);
console.log(`Costo por Km = S/ ${costoKilometro}`);
console.log(`Costo total = S/ ${total}`);
