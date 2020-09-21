/**
 * Realice un diagrama de flujo y pseudocódigo que representen el
 * algoritmo para determinar cuánto pagará finalmente una persona
 * por un artículo equis, considerando que tiene un descuento de 20%,
 * y debe pagar 15% de IVA (debe mostrar el precio con descuento y el
 * precio final).
 */
let precio = +prompt("Ingrese precio de articulo");
let impuesto = 0;
let precioFinal = 0;
let descuento = precio * 0.2;

console.log("PRECIO DE ARTICULO");
console.log(`Precio inicial = S/ ${precio}`);

precio = precio - descuento;
console.log(`Precio con descuento 20% = S/ ${precio}`);

impuesto = precio * 0.15;
precioFinal = precio + impuesto;

console.log(`Impuesto 15% = S/ ${impuesto}`);
console.log(`Precio final = S/ ${precioFinal}`);
