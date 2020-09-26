/**
 * CALLBACKS
 */

const nombres = ["Jorge", "Luis", "Ximena"];
const dnis = ["12345678", "87654321", "42698748"];

//FUNCION DE BUSQUEDA POR DNI. AUN NO TIENE CALLBACK

// const buscarPorDNI = (dni) => {
//   for (let c = 0; c < dnis.length; c++) {
//     if (dnis[c] === dni) {
//       console.log(nombres[c]);
//       break; //para que ya no continue con las iteraciones
//     }
//   }
// };

// buscarPorDNI("87654321");


//FUNCION DE BUSQUEDA POR DNI. UTILIZANDO CALLBACK

const buscarPorDNI = (dni, callback) => {
  for (let c = 0; c < dnis.length; c++) {
    if (dnis[c] === dni) {
      callback(nombres[c]);
      break;
    }
  }
};

// funcion resultado. Tiene un parametro "encontrado"
// const resultado = (encontrado) => {
//   console.log("Llegó el resultado!!!!!");
//   console.log(encontrado);
// };

// buscarPorDNI("87654321", resultado); // pasamos como parametros el dni y la funcion


// otra forma de hacer un callback, es colocando la funcion dentro del parametro
// tenemos una funcion anonima que tiene un parametro "encontrado". la cual luego sera reemplazada en el CALLBACK
// de la funcion buscarPorDNI

buscarPorDNI("42698748", (encontrado) => {
  console.log("Llegó el resultado!!!!!");
  console.log(encontrado);
});
