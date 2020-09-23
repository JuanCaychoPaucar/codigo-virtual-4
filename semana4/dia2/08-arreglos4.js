/**
 * dado un arreglo de numeros enteros
 * imprimir por consola la tabla de multiplicar de cada uno de los elementos internos
 * hasta el numero 10
 */

const numeros = [2, 6, 5, 9, 17];

for (let c = 0; c < numeros.length; c++) {
    console.log("-------------------------------------");
    console.log(`TABLA DEL ${numeros[c]}`);
    for(let i = 0; i <= 10; i++){
        console.log(`${numeros[c]} * ${i} = ${numeros[c]*i}`);
    }
}
