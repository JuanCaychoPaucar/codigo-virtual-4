/**
 * Los strings y sus propiedades
 */
let frase = "Mas sabe el diablo por diablo viejo diablo que por diablo";
console.log(frase);

console.log("*******************");

/**
 * string.length
 * obtiene el tamaño de caracteres que tiene una cadena
 */
let longitud = frase.length;
console.log(`Longitud: ${longitud}`);

/**
 * string.toLowerCase()
 * retorna la misma cadena con todos sus caracteres en minúsculas
 * OJO: no transforma la cadena inicial
 */
console.log("*********************");
let enMinuscula = frase.toLowerCase();
console.log(`En minúsculas: `);
console.log(enMinuscula);

/**
 * string.toUpperCase()
 * retorna la misma cadena con todos sus caracteres en mayúsculas
 * OJO: no transforma la cadena inicial
 */
console.log("*********************");
let enMayuscula = frase.toUpperCase();
console.log(`En mayúscula`);
console.log(enMayuscula);

/**
 * string[posicion]
 * se puede manejar a un string como un arreglo
 * es decir, podemos acceder a sus posiciones
 * con un valor numérico
 */
console.log("*********************");
let posicion5 = frase[5];
console.log(`Posición 5: ${posicion5}`);

/**
 * string.substr(posicion_inicial, cantidad_de_caracteres)
 * retorna una sub-cadena desde la posicion_inicial, se cuenta una cantidad_de_caracteres
 * a la derecha
 */
console.log("**********************");
let subcadena = frase.substr(5, 2);
console.log(`Subcadena: ${subcadena}`);

/**
 * string.substring(posicion_inicial, posicion_final)
 * retorna una subcadena desde la posicion_inciial hasta un caracter antes de la
 * posicion_final
 */

console.log("*********************");
let subcadena2 = frase.substring(5, 10);
console.log(`Subcadena: substring(5,10)`);
console.log(subcadena2);

/**
 * string.includes("cadena");
 * retorna true si es que la cadena pasada por parámetros está dentro de la cadena
 * completa, y false, si la cadena no es parte de la frase completa
 */

console.log("****************************");
let existeDiablo = frase.includes("diablo");
console.log(`Inlcluye la palabra "diablo": ${existeDiablo}`);

/**
 * string.indexOf("cadena",opcional_posicion_inicial)
 * Retorna la posición en la que la "cadena" inicia dentro de la frase,
 * en caso de que no exista dicha sub-cadena, retorna -1
 * OPCIONALMENTE: si se envía un segundo parametro (opcional_posicion_inicial)
 * la subcadena se busca desde la posicón de dicho parametro
 */

console.log("**************************");
let posicionDiablo = frase.indexOf("diablo");
console.log(`Posición de la palabra "diablo": ${posicionDiablo}`);

const posicionesDeDiablo = () => {
  let posicionEncontrada = 0;
  while (true) {
    posicionEncontrada = frase.indexOf("diablo", posicionEncontrada);
    if (posicionEncontrada !== -1) {
      console.log(`Encontrado en posición: ${posicionEncontrada}`);
      posicionEncontrada++;
    } else {
      break;
    }
  }
};
posicionesDeDiablo();

const posicionesDeDiablo2 = () => {
  for (let pos = 0; pos < frase.length; pos++) {
    pos = frase.indexOf("diablo", pos);
    if (pos !== -1) {
      console.log(`Encontrado en la posición: ${pos}`);
    } else {
      break;
    }
  }
};
posicionesDeDiablo2();

/**
 * string.trim()
 * retorna la misma cadena sin incluir los espacios en blanco.
 * TANTO AL FINAL COMO AL INICIO.
 * NO APLICA PARA LOS ESPACIOS INTERMEDIOS
 */

let frase2 = "  cualquier frase interna    ";
console.log(`frase 2: ${frase2}`);
console.log(`frase 2 con trim: ${frase2.trim()}`);

/**
 * EJERCICIO 01
 * Función que imprime la cantidad de vocales de la frase
 * sin importar que sean mayusculas o minusculas
 */

const fraseEjercicio1 = "Siempre pArece Imposible, hasta que se hacE";
const vocales = "aeiou";

let cantidadVocales = (parametro) => {
  let contador = 0;
  let posicion = 0;
  let fraseTemporal = fraseEjercicio1.toLowerCase();

  for (let c = 0; c < parametro.length; c++) {
    while (true) {
      posicion = fraseTemporal.indexOf(parametro[c], posicion);
      if (posicion !== -1) {
        contador++;
        posicion++;
      } else {
        break;
      }
    }
  }
  return contador;
};
console.log("EJERCICIO 01");
console.log(`Vocales en una frase: ${cantidadVocales(vocales)}`);

/**
 * EJERCICIO 02
 * Función que imprime la cantidad de palabras que tenga una frase
 */

const fraseEjercicio2 =
  "      El éxito       es caer   siete       veces y levantarte            ocho              ";

let cantidadPalabras = (parametro2) => {
  let contador2 = 0;
  let posicion2 = 0;
  let fraseTemporal2 = parametro2.trim();

  while (true) {
    posicion2 = fraseTemporal2.indexOf(" "); // buscamos un espacio en blanco
    if (posicion2 !== -1) {
      fraseTemporal2 = fraseTemporal2
        .substring(posicion2, fraseTemporal2.length)
        .trim();
      contador2++;
    } else {
      break;
    }
  }
  if (parametro2.length === 0) {
    return 0;
  } else {
    return contador2 + 1;
  }
};

console.log("EJERCICIO 02");
console.log(`Palabras en una frase: ${cantidadPalabras(fraseEjercicio2)}`);

/**
 * EJERCICIO 03
 * Función que imprime si una frase es un palíndromo
 * ¿qué es un palíndromo?
 * una frase que se lee igual al derecho y al revés
 * ejemplo:
 * anita lava la tina (si consideramos quitar los espacios en blanco, la frase se lee igual)
 * radar
 * amor a roma
 * la ruta natural
 */

/**
 * HINT:
  -- antes de cualquiera de las dos formas, quitarle los espacios intermedios
  ¿cómo?
  recorrer toda la cadena e ir sumando letra a letra un nuevo string
  y cada vez que se encuentre un espacio en blanco, saltar a la sigueinte
  iteración

  forma 1: 
  - Recorrer toda la cadena de caracteres desde el final hasta el inicio,
    en cada iteración, ir sumando un string que incialmene esté vacío con 
    cada nuevo caracter. Al final de todas las iteraciones, comparar el 
    string original con el string creado en el ciclo for
  
  forma 2:
  - Recorrer toda la cadena de caracteres, desde el inicio hasta la mitad
    de la cadena y comparar en cada iteración por ejemplo lo siguiente:
    Iteración 1:
    posición 0 con posición length-0
    Iteración 2:
    posición 1 con posición length-1
    Iteración 3:
    posición 2 con posición lentgh-2
    y así sucesivamente... en cada iteración deben de compararse que ambos
    caracteres son iguales.
 */

const fraseEjercicio3 = "        Amor a Roma      ";

let palindromo = (parametro3) => {
  let fraseTemporal3 = parametro3.toLowerCase().trim();
  let fraseNueva = "";
  let fraseSinEspacios = "";
  let caracter = "";

  // nueva frase formada del final hasta el inicio
  for (let c = fraseTemporal3.length - 1; c >= 0; c--) {
    caracter = fraseTemporal3[c];
    if (caracter !== " ") {
      fraseNueva = fraseNueva + caracter;
    }
  }

  // frase original sin espacios
  for (let i = 0; i < fraseTemporal3.length; i++) {
    caracter = fraseTemporal3[i];
    if (caracter !== " ") {
      fraseSinEspacios = fraseSinEspacios + caracter;
    }
  }

  if (fraseSinEspacios === fraseNueva) {
    return "Si es palindroma";
  } else {
    return "No es palindroma";
  }
};

console.log("EJERCICIO 03");
console.log(`Palabras palindromas: ${palindromo(fraseEjercicio3)}`);
