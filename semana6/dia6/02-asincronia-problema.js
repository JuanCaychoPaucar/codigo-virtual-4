const buscarPorDniProblema = (dni) => {
  let respuesta = {};
  setTimeout(() => {
    respuesta = {
      nombre: "Jorge Garnica Blanco",
      fechaNac: "08-09-1991",
    };
  }, 2000);
  return respuesta;
};

/**
 * la variable resultado siempre sera un objeto vacio,
 * dado que la funcion buscarPorDniProblema espera 2 segundos en setear dicha variable.
 * pero por asincronia, el retorno de la variable respuesta es inmediato
 */
let resultado1 = buscarPorDniProblema("47548520");
console.log(resultado1);


// POSIBLE SOLUCION A LA ASINCRONIA
/**
 * enviar un callback para recibir en el, el resultado de la busqueda
 */
const buscarporDni = (dni, callback) => {
  let respuesta = {};

  setTimeout(() => {
    respuesta = {
      nombre: "Jorge Garnica Blanco",
      fechaNac: "08-09-1991",
    };

    callback(respuesta);
  }, 2000);
};

const resultado = buscarporDni("12345678", (res) => {
  console.log(res);
});
