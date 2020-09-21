/**
 * Un estacionamiento requiere determinar el cobro que debe aplicar a
 * las personas que lo utilizan. Considere que el cobro es con base en las
 * horas que lo disponen y que las fracciones de hora se toman como
 * completas y realice un diagrama de flujo y pseudocódigo que representen
 * el algoritmo que permita determinar el cobro.
 */

let tarifa = 5;
let totalHoras = 0;
let totalMinutos = 0;
let totalPagar = 0;

let horaInicio = prompt("Hora de entrada (formato 24 horas)");
let hora1 = horaInicio.substring(0, 2);
let minuto1 = horaInicio.substring(3, 5);

let horaFin = prompt("Hora de salida (formato 24 horas)");
let hora2 = horaFin.substring(0, 2);
let minuto2 = horaFin.substring(3, 5);

console.log("ESTACIONAMIENTO");
console.log(`Hora de entrada = ${hora1}:${minuto1}`);
console.log(`Hora de salida = ${hora2}:${minuto2}`);

//calculo de tiempo transcurrido
totalHoras = hora2 - hora1;
totalMinutos = minuto2 - minuto1;
if (totalMinutos < 0) {
  totalMinutos = 60 + totalMinutos;
  totalHoras--;
}

console.log(`Tiempo transcurrido = ${totalHoras}:${totalMinutos}`);

//total a pagar
if (totalMinutos > 0) {
  totalHoras++;
}

totalPagar = tarifa * totalHoras;

console.log(`Tarifa x hora = S/ ${tarifa}`);
console.log(`Total a pagar = S/ ${totalPagar}`);
