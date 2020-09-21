/**
 * Se requiere determinar el tiempo que tarda una persona en llegar de
 * una ciudad a otra en bicicleta, considerando que lleva una velocidad
 * constante. Realice un diagrama de flujo y pseudocódigo que representen
 * el algoritmo para tal fin.
 */

 let distancia = +prompt("Ingrese la distancia a recorrer en Km");
 let velocidad = +prompt("Ingrese la velocidad en Km/h");
 let tiempo = distancia / velocidad;

 console.log("TIEMPO RECORRIDO");
 console.log(`distancia = ${distancia} km`);
 console.log(`velocidad = ${velocidad} km/h`);
 console.log(`tiempo = ${tiempo} h`);