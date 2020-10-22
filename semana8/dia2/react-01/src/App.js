/**
 * INSTALAR EXTENSION PARA VSCODE
 * ES7 React/Redux/GraphQL/React-Native snippets
 * Para poder crear componentes mas rapidamente
 * escribimos: rafce
 */

/**
 * INSTALAR EXTENSION PARA CHROME
 *  React Developer Tools
 */

/**
 * Cuando importamos React, quiere decir que estamos creando un COMPONENTE.
 * Un componente contiene:
 *    - la parte de vista (HTML), la cual va en el return de la funcion. Solo puede retornar un elemento, es decir, dentro de una envoltura padre.
 *    - la parte logica (JavaScript), la cual es el desarrollo de la funcion
 *
 * Un componente debe empezar con la primera letra en maysucula, y lleva el mismo nombre del archivo JS
 *
 * Cuando importamos una libreria directamente de la carpeta node_modules,nole colocamos './ruta_archivo'
 *
 * La notacion JSX es cuando trabajamos con codigo HTML y JS a la vez.
 */

/**
 * La comunicacion de componentes solo se da de padre a a hijo y es a traves de las props
 * ejem:
 * <Articulos numero = {56} suma = {90} />
 * Articulo ha recibido la propiedaa numero con el valor 56
 *
 * const Articulos = ( { numero, suma })=>{
 *    log(numero);
 *    log(suma);
 *
 * return (<></>)
 * }
 */

import React from "react";
import Header from "./components/Header";
import Articulos from "./components/Articulos";
import "./App.css";

const App = () => {
  // <> son FRAGMENTOS o FRAGMENTS, y se utilizan si no queremos envolver el HTML en una etiqueta que pueda afectar nuestros estilos CSS.
  // Todo lo que vaya dentro de el, sera el return de la funcion
  // No crea un elemento en el DOM

  const titulo = "Mi primer curso de React";
  const proximosCursos = ["Angular", "Webpack", "NextJS"];
  const articulos = [
    { id: 783, titulo: "¿Cómo desestructurar objetos?" },
    { id: 33, titulo: "Aprende babel en 10 minutos" },
    { id: 842, titulo: "Qués significa DevOps?" },
  ];

  return (
    <>
      <Header />
      <main>
        <h1>{titulo}</h1>
        <hr />
        <h2>Próximos cursos:</h2>
        <ul>
          {proximosCursos.map((curso, i) => (
            <li key={i + curso}>{curso}</li>
          ))}
        </ul>

        <hr />

        {/* mandamos la propiedad blog, cuyo contenido es el arreglo*/}
        <Articulos blog={articulos} />
      </main>
    </>
  );
};

export default App;
