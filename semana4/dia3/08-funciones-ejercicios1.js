/**
 * Crear un algoritmo donde exista una funcion que reciba un arreglo de edades
 * y retorne a todos los mayores de edad en un nuevo arreglo
 */

const filtroMayores = (edades) => {
  let mayores = [];
  for (let c = 0; c < edades.length; c++) {
    if (edades[c] >= 18) {
      mayores.push(edades[c]);
    }
  }
  console.log(mayores);
};

filtroMayores([25, 10, 12, 35]);
