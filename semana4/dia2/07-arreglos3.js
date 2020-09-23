/**
 * calcular la cantidad de numeros positivos, negativos, e iguales a cero
 */

let arreglo = [1, -140, 4, 0, 7, -9, 0, -6];
let p = 0;
let n = 0;
let z = 0;

for (let c = 0; c < arreglo.length; c++) {
  if (arreglo[c] === 0) {
    z = z + 1;
  } else {
    if (arreglo[c] < 0) {
      n = n + 1;
    } else {
      if (arreglo[c] > 0) {
        p = p + 1;
      }
    }
  }
}

console.log(`Positivos = ${p}`);
console.log(`negativos = ${n}`);
console.log(`Iguales a cero = ${z}`);

