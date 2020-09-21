/**
 * Se requiere determinar el costo que tendrá realizar una llamada telefónica
 * con base en el tiempo que dura la llamada y en el costo por
 * minuto. Realice un diagrama de flujo y pseudocódigo que representen
 * el algoritmo para tal fin.
 */

let tarifa = +prompt("Ingrese tarifa por minuto");
let totalHoras = 0;
let totalMinutos = 0;
let totalPagar = 0;

let horaInicio = prompt("Hora de incio (formato 24 horas)");
let hora1 = horaInicio.substring(0, 2);
let minuto1 = horaInicio.substring(3, 5);

let horaFin = prompt("Hora de termino (formato 24 horas)");
let hora2 = horaFin.substring(0, 2);
let minuto2 = horaFin.substring(3, 5);

console.log("LLAMADA TELEFONICA");
console.log(`Hora de inicio = ${hora1}:${minuto1}`);
console.log(`Hora de termino = ${hora2}:${minuto2}`);

//calculo de tiempo transcurrido
totalHoras = hora2 - hora1;
totalMinutos = minuto2 - minuto1;
if (totalMinutos < 0) {
  totalMinutos = 60 + totalMinutos;
  totalHoras--;
}

console.log(`Tiempo transcurrido (HH:mm)= ${totalHoras}:${totalMinutos}`);
totalMinutos = totalMinutos + totalHoras * 60;

console.log(`Tiempo transcurrido (mm)= ${totalMinutos}`);

//total a pagar

totalPagar = tarifa * totalMinutos;

console.log(`Tarifa x minuto = S/ ${tarifa}`);
console.log(`Total a pagar = S/ ${totalPagar}`);
