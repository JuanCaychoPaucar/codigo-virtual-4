import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Mascotas from "./mascotas/Mascotas";
import Header from "./components/Header";
// import Formulario from "./components/Formulario";
// import FormularioValidacion from "./components/FormularioValidacion";

const App = () => {
  return (
    <>
      <Header />
      <main className="container mt-4">
        {/* <Formulario /> */}
        {/* <FormularioValidacion /> */}

        <Mascotas />
      </main>
    </>
  );
};

export default App;
