/**
 * Se desea calcular la potencia eléctrica de circuito de la figura 2.6. Realice
 * un diagrama de flujo y el pseudocódigo que representen el algoritmo
 * para resolver el problema. Considere que: P = V*I y V = R*I.
 */

 let voltaje = +prompt("Ingrese el voltaje");
 let resistencia = 4;
 let corriente = voltaje / resistencia;
 let potencia = voltaje * corriente;

 console.log("CALCULO DE POTENCIA ELECTRICA");
 console.log(`Voltaje = ${voltaje} voltios`);
 console.log(`Resistencia = ${resistencia} ohmmios`);
 console.log(`Corriente = ${corriente} amperios`);
 console.log(`Potencia = ${potencia} whats`);