/**
 * Importando variables que han sido exportadas individualmente
 * NOTA:
 * Se usa {} cuando las variables son exportadas individualmente.
 */
import { URL_BACKEND, API_KEY } from "./variables.js";

/**
 * Importando un elemento por defecto del archivo funciones.js
 * NOTA: Los elementos exportados como "default", no llevan el signo {}
 * NOTA: Pueden ser recibidos con cualquier nombre
 */
import funcionDespedida, { saludar } from "./funciones.js";

/**
 * Importando una funcion exportada individualmente, asigandole un nuevo nombre
 */
import { Persona as contruirPersona } from "./Persona.js";

console.log(URL_BACKEND);
console.log(API_KEY);

saludar();
funcionDespedida();

let objPersona = contruirPersona("Jorgito", "Garnica", 29, "01020304");
console.log(objPersona);

objPersona.asignarEdad(19);
console.log(objPersona);
