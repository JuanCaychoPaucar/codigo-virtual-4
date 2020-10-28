import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Mascotas from "./mascotas/Mascotas";
// import Formulario from "./components/Formulario";
// import FormularioValidacion from "./components/FormularioValidacion";

const App = () => {
  return (
    <>
      <main className="container mt-4">
        {/* <Formulario /> */}
        {/* <FormularioValidacion /> */}
        <Mascotas />
      </main>
    </>
  );
};

export default App;
