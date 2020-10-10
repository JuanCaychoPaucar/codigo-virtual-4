/**
 * DESTRUCTURACION DE ARREGLOS
 * Una manera directa de obtener acceso a las posiciones y elementos de los arreglos
 */

let nombres = ["Jorgito", "Carmencita", "Pepito", "Carlita", "Luisito"];

let [primero, segundo, , , ultimo] = nombres;

console.log(primero);
console.log(segundo);
console.log(ultimo);

// Ejemplo
/**
 * Funcion que retorna un arreglo de 2 elementos [lat, lng]
 * dado el nombre de una ciudad a buscar
 * @param {*} ciudad 
 */
const getCoordsByCiudad = (ciudad) => {
    // esta es una funcion fake
    console.log("buscando ......");
    return [16.4141, -70.43516];
};

// let resultado = getCoordsByCiudad("Puno");
// let latitud = resultado[0];
// let longitud = resultado[1];
// console.log(latitud);
// console.log(longitud);

let [latitud, longitud] = getCoordsByCiudad("Puno");
console.log(latitud);
console.log(longitud);


/**
 * el operador rest(...)
 * devuelve un arreglo de todos los elementos de un arreglo
 * En el ejemplo, sera un arreglo de todos los elementos menos el primer elemento
 * 
 * OJO:
 * el operador rest(...) solo puede ser el ultimo elemento destructurador
 */
let [nombre1, ...resto] = nombres;
console.log(nombre1);
console.log(resto);