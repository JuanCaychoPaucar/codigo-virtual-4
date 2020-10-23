import React, { useState } from "react";
import Contador from "./components/Contador";
import "./App.css";
import Productos from "./components/Productos";
import Carrito from "./components/Carrito";

const App = () => {
  const [canasta, setCanasta] = useState([]);

  const agregarCanasta = (id) => {
    let objProducto = productos.find((p) => p.id === id);

    let copiaCanasta = [...canasta];

    let productoExistente = canasta.find((p) => p.id === id);
    if (productoExistente) {
      copiaCanasta = copiaCanasta.map((p) => {
        if (p.id === id) {
          p.cantidad += 1;
          return p;
        } else {
          return p;
        }
      });
    } else {
      // le agregamos el atributo cantidad
      copiaCanasta.push({ ...objProducto, cantidad: 1 });
    }

    setCanasta(copiaCanasta);
  };

  const eliminarProducto = (id) => {
    /**
     * 1. Obtener una copia de la canasta.
     * 2. En la copia de la canasta filtrar todos los elementos con id diferente al que recibopor parametros.
     * 3. Actualizar la canasta con la funcion setCanasta, con los nuevos valores.
     * 4. Pasar como props al carrito, la funcion eliminarProducto
     */

    let canastaCopia = [...canasta];

    // filtar todos los id que sean diferente del id que le mando por parametro
    canastaCopia = canastaCopia.filter((p) => p.id !== id);

    setCanasta(canastaCopia);
  };

  const productos = [
    { id: 2343, nombre: "Play Station 5", precio: 34454.38 },
    { id: 542, nombre: "Laptopr Razer", precio: 7000.38 },
    { id: 44, nombre: "Monitor LG", precio: 500 },
    { id: 243, nombre: "Mouse gamer", precio: 80 },
  ];

  console.log("Ejecutando componente App");
  return (
    <div>
      <Contador />
      <hr />
      <Productos productos={productos} agregarCanasta={agregarCanasta} />
      <Carrito canasta={canasta} eliminarProducto={eliminarProducto} />
    </div>
  );
};

export default App;
