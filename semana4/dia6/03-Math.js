/**
 * la clase Math nos ayuda a trabajar con funciones matematicas.
 *
 * para usar la clase math y sus metodos,
 * no se necesita crear un objeto
 *
 */

/**
 * Math.random();
 * retorna un numero aleatorio entre 0 y 1
 */

let aleatorio = Math.random();
console.log(aleatorio);

/**
 * Retornar un numeroaleatorio entre min y max
 * Math.random() * (max - min) + min;
 */

let aleatorioEntre500y100 = Math.random() * (100 - 50) + 50;
console.log(aleatorioEntre500y100);

let aleatorioEntre_20y100 = Math.random() * (100 - -20) + -20;
console.log(aleatorioEntre_20y100);

/**
 * Obtener el piso de un numero
 * Es obtener la parte entera proxima inferiorde un numero decima
 * Ejemplo:
 * 16.99 = 16
 * 5.85 = 5
 *
 * Math.floor(numero);
 */

console.log(Math.floor(52.99));

/**
 * Obtener el techo de un numero decimal
 * Math.ceil(numero_decimal);
 */

console.log(Math.ceil(52.1));


/**
 * redondear un numero de forma clasica
 * Math.round(numero_decimal);
 */

console.log(Math.round(52.4));