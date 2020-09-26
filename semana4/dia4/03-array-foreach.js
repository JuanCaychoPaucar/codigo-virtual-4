/**
 * FOR EACH
 * es una funcion propia de los arreglos
 * y sirve para recorrer un arreglo,
 * sin necesidad de usar un ciclo for
 */

const nombres = ["Juliana", "Carlos", "Monica", "Abel", "Pepillo"];

/**
 * for each recibe una funcion anonima, la cual ejecutara
 * tantas veces como elementos tenga mi arreglo.
 *
 * Puede recibir los siguientes parametros
 * (elemento, iterador, arreglo) => {}
 */
nombres.forEach((elemento, c, arreglo) => {
  console.log(`Elemento ${elemento}, C = ${c}`);
  console.log(arreglo);
});
