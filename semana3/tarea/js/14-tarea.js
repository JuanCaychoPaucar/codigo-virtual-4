/**
 * Una empresa desea determinar el monto de un cheque que debe
 * proporcionar a uno de sus empleados que tendrá que ir por equis
 * número de días a la ciudad de Monterrey; los gastos que cubre la
 * empresa son: hotel, comida y 100.00 pesos diarios para otros gastos.
 * El monto debe estar desglosado para cada concepto. Realice un
 * diagrama de flujo y pseudocódigo que representen el algoritmo
 * que determine el monto del cheque.
 */

 let dias = +prompt("Total de dias");
 let hotel = +prompt("Costo de hotel x dia");
 let comida = +prompt("Costo de comida x dia");
 let otros = 100;

 let totalHotel = dias * hotel;
 let totalComida = dias* comida;
 let totalOtros = dias * otros;
 let montoCheque = totalHotel + totalComida + totalOtros;

 console.log("CHEQUE POR GASTOS");
 console.log(`Total de dias = ${dias}`);
 console.log(`Hotel x dia = S/ ${hotel}`);
 console.log(`Comida x dia = S/ ${comida}`);
 console.log(`Otros gastos x dia = S/ ${otros}`);
 console.log(`Gasto total hotel = S/ ${totalHotel}`);
 console.log(`Gasto total comida = S/ ${totalComida}`);
 console.log(`Gasto total otros = S/ ${totalOtros}`);
 console.log(`Monto total del cheque = S/ ${montoCheque}`);
