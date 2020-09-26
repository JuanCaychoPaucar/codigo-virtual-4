/**
 * FILTER
 * es una funcion propia de los arreglos.
 * Recibe un callback con los mismos parametros que la funcion forEach.
 * La diferencia es que filter retorna un nuevo arreglo
 * con los elementos filtrados
 */

const numeros = [12, 3, -3, -9, 67, 4, 32, 33, -4, -10];

let resultado = numeros.filter((elemento, i) => {
  if (elemento <= 0) {
    return elemento;
  }
});

console.log(resultado);
