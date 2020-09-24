/**
 * Funciones que reciben parametros
 */

function tablaDeMultiplicar(numero) {
  for (let c = 0; c <= 10; c++) {
    console.log(`${numero} x ${c} = ${c * numero}`);
  }
}

tablaDeMultiplicar(9);
console.log("---------------------------");
tablaDeMultiplicar(80);
console.log("---------------------------");
tablaDeMultiplicar(100);
console.log("---------------------------");

/**
 * imprimir la tabla de multiplicar de los elementos del arreglo
 */

let arreglo = [5, 8, 4, 7, 2, 3];

for(let c = 0; c < arreglo.length; c++){
    console.log("-----------------------------------");
    console.log(`Tabla del ${arreglo[c]}`);
    tablaDeMultiplicar(arreglo[c]);
}
