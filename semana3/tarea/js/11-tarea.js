/**
 * La compañía de luz y sombras (CLS) requiere determinar el pago
 * que debe realizar una persona por el consumo de energía eléctrica,
 * la cual se mide en kilowatts (KW). Realice un diagrama de flujo y
 * pseudocódigo que representen el algoritmo que permita determinar
 * ese pago.
 */

let tarifa = +prompt("Ingrese tarifa x KW");
let consumo = +prompt("Ingrese consumo en KW");
let totalPagar = tarifa * consumo;

console.log("CONSUMO ELECTRICO");
console.log(`Tarifa x KW = S/ ${tarifa}`);
console.log(`Consumo KW = ${consumo} KW`);
console.log(`Total a pagar = S/ ${totalPagar}`);
