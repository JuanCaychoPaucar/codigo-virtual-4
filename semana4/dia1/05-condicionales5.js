/**
 * crear un algoritmo para verificar
 * si un año ingresado por el usuario es bisiesto
 */

/**
 * TEORIA
 * Los años bisiestos son los divisibles entre 4.
 * Excepto si es divisible entre 100.
 * O que simplemente sea divisible entre 400.
 */

let ano = 2100;

// if (ano % 100 === 0) {
//   console.log("No es bisiesto");
// } else {
//   if (ano % 4 === 0 && ano % 400) {
//     console.log("Si es bisiesto");
//   }
// }

//FORMA SIMPLIFICADA
if((ano % 4 === 0 && ano % 100 !== 0) || ano % 400 === 0){
    console.log(`${ano} es bisiesto`);
}else{
    console.log(`${ano} no es bisiesto`);
}
