import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Mascotas from "./mascotas/Mascotas";
import Header from "./components/Header";
import Razas from "./mascotas/Razas";
import Tipos from "./mascotas/Tipos";
// import Formulario from "./components/Formulario";
// import FormularioValidacion from "./components/FormularioValidacion";

const App = () => {
  const estilo = {
    height: "5px",
    borderWidth: 0,
    color: "red",
    backgroundColor: "red",
  };
  return (
    <>
      <Header />
      <main className="container mt-4">
        {/* <Formulario /> */}
        {/* <FormularioValidacion /> */}

        <Mascotas />
        <br />
        <hr style={estilo} />
        <br />
        <Razas />
        <br />
        <hr style={estilo} />
        <br />
        <Tipos />
      </main>
    </>
  );
};

export default App;
