/**
 * CALLBACKS
 */

const nombres = ["Jorge", "Luis", "Ximena"];
const dnis = ["12345678", "87654321", "42698748"];

const buscarPorDNI = (dni, funcion) => {
  for (let c = 0; c < dnis.length; c++) {
    if (dnis[c] === dni) {
      funcion(nombres[c]);
      return; //no es para retornar algo. Es para que la funcion buscarPorDNI finalice.
    }
  }
  funcion(null); //revisar video en 1:15:27
};

buscarPorDNI("42698748", (rpta) => {
  if (rpta !== null) {
    console.log(`Encontrado: ${rpta}`);
  } else {
    console.log("No existen coincidencias");
  }
});
