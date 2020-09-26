/**
 *  Algoritmo para guardar N personas y registrar de cada una
 * nombre, apellido y edad.
 * Guardarlo en un arreglo de objetos e impimirlo
 */

const registrarpersonas = () => {
  const n = 3;
  const personas = [];
  for (let c = 0; c < n; c++) {
    const nombre = prompt(`Ingrese el nombre de la persona ${c + 1}`);
    const apellido = prompt(`Ingrese el apellido de la persona ${c + 1}`);
    const edad = prompt(`Ingrese la edad de la persona ${c + 1}`);

    //armando un objeto persona en cada iteracion
    const objPersona = {
      name: nombre,
      lastname: apellido,
      age: edad,
    };

    //agregar el objeto al arreglo
    personas.push(objPersona);
  }
  console.log(personas);
};

// registrarpersonas(); //se imprime en forma de un JSON
