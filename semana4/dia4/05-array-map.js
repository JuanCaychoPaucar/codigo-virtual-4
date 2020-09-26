/**
 * MAP
 * es una funcion propia de los arreglos
 * y el comportamiento es similar a la funcion filter.
 * Sin embargo, en la funcion map se retornan siempre,
 * todos los elementos del arreglo, porque su objetivo principal es
 * armar un nuevo arreglo con alguno o todos los elementos modificados
 */

const numeros = [12, -3, 0, -9, 67, 0, -10, 0, -500, -4, 32, 33];

let respuesta = numeros.map((elemento, i) => {
  if (elemento > 0) {
    return elemento * 2;
  }
  return elemento;
});

console.log(respuesta);
