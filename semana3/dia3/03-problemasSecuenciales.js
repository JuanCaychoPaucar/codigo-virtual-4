/**
 * Problema 2.2 pagina 30
 */

 /**
  * convertir un string a number
  * agregamos el signo + al inicio
  * +prompt("Ingrese la primera nota");
  */

let c1 = +prompt("Ingrese la primera nota");
let c2 = +prompt("Ingrese la segunda nota");
let c3 = +prompt("Ingrese la tercera nota");
let c4 = +prompt("Ingrese la cuarta nota");
let suma = 0;
let promedio = 0;
suma = c1 + c2 + c3 + c4;
promedio = suma / 4;
console.log(`Joven su promedio es: ${promedio}`);

alert(`Joven su promedio es: ${promedio}`);