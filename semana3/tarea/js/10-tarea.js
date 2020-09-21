/**
 * La CONAGUA requiere determinar el pago que debe realizar una
 * persona por el total de metros cúbicos que consume de agua. Realice
 * un diagrama de flujo y pseudocódigo que representen el algoritmo
 * que permita determinar ese pago.
 */

let tarifa = +prompt("Ingrese tarifa x m3");
let consumo = +prompt("Ingrese consumo en m3");
let totalPagar = tarifa * consumo;

console.log("CONSUMO DE AGUA");
console.log(`Tarifa x m3 = S/ ${tarifa}`);
console.log(`Consumo m3 = ${consumo} m3`);
console.log(`Total a pagar = S/ ${totalPagar}`);
