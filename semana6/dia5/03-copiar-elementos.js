/**
 * Formas de copiar arreglos y objetos
 */

let edades = [50, 12, 36, 80, 20];

// ¿Como copiar un arreglo a otra variable

// ERROR
console.log("FORMA INCORRECTA");
let nuevasEdades = edades;
console.log(edades);
console.log(nuevasEdades);

console.log("modificando");
edades[0] = 51;
console.log(edades);
console.log(nuevasEdades);


// CORRECTO
console.log("FORMA CORRECTA");
let edadesCopiadas = [...edades];
console.log(edades);
console.log(edadesCopiadas);
console.log("modificando nuevamente");
edades[1] = 2;
console.log(edades);
console.log(edadesCopiadas);
