/**
 * las funciones async (asincronas) tienen la posibilidad de hacer
 * sincronas varias tareas asincronas en su interior
 */
/**
 * Toda funcion async (asincrona), en su apartado "return" retornas una promesa
 */
/**
 * si deseamos usar la palabra reservada "await", la funcion contenedora debe ser "async" (asincrona).
 */

const getUsuarios = async () => {
  // si queremos guardar el resultado de una funcion asincrona, debemos colocar la palabra await.
  // await no funciona sin el async
  const peticion = await fetch("https://reqres.in/api/users?page=2");
  const data = await peticion.json();
  return data;
};

// como la funcion getUsuarios retorna una promesa, entonces debemos de colocarle el then
getUsuarios().then((rpta) => {
  console.log(rpta);
});

/**
 * POKEMONES
 */

/**
 * Funcion asincrona que retorna la informacion de los N primeros pokemones
 * de la API de pokemon
 * @param {number} n es el numero de pokemones a consumir
 */
const getPokemones = async (n) => {
  const URL_BACKEND = "https://pokeapi.co/api/v2/pokemon";

  let pokemones = [];

  for (let i = 1; i <= n; i++) {
    const peticion = await fetch(`${URL_BACKEND}/${i}`);
    const data = await peticion.json();
    pokemones.push(data.name);
  }
  return pokemones;
};

getPokemones(15).then((rpta) => {
    console.log(rpta);
});
