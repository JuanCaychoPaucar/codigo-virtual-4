import React, { useState } from "react";

const Contador = () => {
  /**
   * [c, actualizarC] es la desestructuracion de un arreglo
   * c : es la variable de estado
   * actualizarC : la funcion que actualiza la variable de estado
   * useState(0) : crea variables de estado
   * (0) : valor inicial de la variable de estado
   */

  const [c, actualizarC] = useState(0);

  console.log("Ejecutando el componente Contador");

  const restar = () => {
    actualizarC(c - 1);
  };

  const sumar = () => {
    actualizarC(c + 1);
  };

  return (
    <div>
      <button
        onClick={() => {
          restar();
        }}
      >
        -1
      </button>
      {c}
      <button
        onClick={() => {
          sumar();
        }}
      >
        +1
      </button>
    </div>
  );
};

export default Contador;
