/**
 * Pinturas “La brocha gorda” requiere determinar cuánto cobrar por
 * trabajos de pintura. Considere que se cobra por m2 y realice un diagrama
 * de flujo y pseudocódigo que representen el algoritmo que le
 * permita ir generando presupuestos para cada cliente.
 */

let tarifa = 5;
let ancho = prompt("Ingrese ancho en metros");
let altura = prompt("Ingrese altura en metros");
let area = ancho * altura;
let totalPagar = tarifa * area;

console.log("TRABAJOS DE PINTURA LA BROCHA GORDA");
console.log(`Tarifa x m2 = S/ ${tarifa}`);
console.log(`ancho = ${ancho} m`);
console.log(`altura = ${altura} m`);
console.log(`area total = ${area} m2`);
console.log(`Total a pagar = S/ ${totalPagar} `);