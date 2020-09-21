/**
 * Una empresa importadora desea determinar cuántos dólares puede
 * adquirir con equis cantidad de dinero mexicano. Realice un diagrama
 * de flujo y pseudocódigo que representen el algoritmo para tal fin.
 */

let pesos = +prompt("Ingrese el dinero en pesos mexicanos");
let tipoCambio = +prompt("Ingrese el tipo de cambio a dolares");
let dolares = pesos / tipoCambio;

console.log(
  `CONVERSION DE DIVISAS\nPesos : ${pesos}\nTipo de cambio : ${tipoCambio}\nDolares: ${dolares}`
);
