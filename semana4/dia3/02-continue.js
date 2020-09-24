/**
 * La sentencia "continue" interrumpe la iteracion que se encuentra desarrollando
 * una estructura repetitiva. Sin embargo, hace que se continue con la siguiente iteracion.
 */

/**
 * Algoritmo que imprime los numeros diferentes de 0
 */

const edades = [20, 12, 2, 0, 58, 25, 95, 3];

for (let c = 0; c < edades.length; c++) {
  if (edades[c] === 0) {
    continue;
  }
  console.log(edades[c]);
}
