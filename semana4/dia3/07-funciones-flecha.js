/**
 * Funciones de flecha
 */

// const tablaDeMultiplicar = function (numero) {
//   for (let c = 0; c <= 10; c++) {
//     console.log(`${numero} x ${c} = ${c * numero}`);
//   }
// };

/**
 * una funcion flecha es una funcion anonima
 * solo que esta escrito en sintaxis moderna de JavaScript
 */

const tablaDeMultiplicar = (numero) => {
  for (let c = 0; c <= 10; c++) {
    console.log(`${numero} x ${c} = ${c * numero}`);
  }
};

tablaDeMultiplicar(17);