/**
 * “El náufrago satisfecho” ofrece hamburguesas:
 * sencillas (S), dobles (D) y triples (T),
 * las cuales tienen un costo de $20, $25 y $28 respectivamente.
 * La empresa acepta tarjetas de crédito con un cargo
 * de 5 % sobre la compra. Suponiendo que los clientes adquieren N
 * hamburguesas, las cuales pueden ser de diferente tipo, realice un
 * algoritmo para determinar cuánto deben pagar. Represéntelo en
 * diagrama de flujo, pseudocódigo y diagrama N/S.
 */

const costoS = 20;
const costoD = 25;
const costoT = 28;

let cantidadS = 0;
let cantidadD = 0;
let cantidadT = 0;

let pagoTotalS = 0;
let pagoTotalD = 0;
let pagoTotalT = 0;

let condicion = true;

while (condicion) {
  let opcion = prompt(
    `Seleccione una opcion del menu:
    [S] Hamburguesa simple
    [D] Hamburguesa doble
    [T] Hamburguesa triple
    [1] Pago en efectivo
    [2] Pago con tarjeta de credito
    [0] Salir`
  );

  switch (opcion) {
    case ("S", "s"):
      cantidadS = +prompt(`Ingrese cantidad de hamburguesas Simples`);
      pagoTotalS = pagoTotalS + cantidadS * costoS;
      break;

    case ("D", "d"):
      cantidadD = +prompt(`Ingrese cantidad de hamburguesas Dobles`);
      pagoTotalD = pagoTotalD + cantidadD * costoD;
      break;

    case ("T", "t"):
      cantidadT = +prompt(`Ingrese cantidad de hamburguesas Triples`);
      pagoTotalT = pagoTotalT + cantidadT * costoT;
      break;

    case "1":
      console.log("BOLETA DE VENTA");
      if (cantidadS !== 0) {
        console.log(
          `Hamburguesas Simples     ${costoS} x ${cantidadS}    S/ ${pagoTotalS}`
        );
      }
      if (cantidadD !== 0) {
        console.log(
          `Hamburguesas Dobles      ${costoD} x ${cantidadD}    S/ ${pagoTotalD}`
        );
      }
      if (cantidadT !== 0) {
        console.log(
          `Hamburguesas Triples     ${costoT} x ${cantidadT}    S/ ${pagoTotalT}`
        );
      }

      console.log(`PAGO TOTAL = ${pagoTotalS + pagoTotalD + pagoTotalT}`);
      condicion = false;
      break;

    case "2":
      console.log("BOLETA DE VENTA");
      if (cantidadS !== 0) {
        console.log(
          `Hamburguesas Simples     ${costoS} x ${cantidadS}    S/ ${pagoTotalS}`
        );
      }
      if (cantidadD !== 0) {
        console.log(
          `Hamburguesas Dobles      ${costoD} x ${cantidadD}    S/ ${pagoTotalD}`
        );
      }
      if (cantidadT !== 0) {
        console.log(
          `Hamburguesas Triples     ${costoT} x ${cantidadT}    S/ ${pagoTotalT}`
        );
      }

      console.log(`MONTO TOTAL = ${pagoTotalS + pagoTotalD + pagoTotalT}`);
      console.log(
        `PAGO TOTAL (+ 5%) = ${(pagoTotalS + pagoTotalD + pagoTotalT) * 1.05}`
      );
      condicion = false;
      break;

    case "0":
      condicion = false;
      console.log("Fin de programa");
      break;

    default:
      condicion = false;
      console.log("Fin de programa");
  }
}
