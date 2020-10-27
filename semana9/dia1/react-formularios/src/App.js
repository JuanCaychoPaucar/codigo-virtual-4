import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import MascotasForm from "./mascotas/MascotasForm";
// import Formulario from "./components/Formulario";
// import FormularioValidacion from "./components/FormularioValidacion";

const App = () => {
  return (
    <>
      <main className="container">
        {/* <Formulario /> */}
        {/* <FormularioValidacion /> */}
        <MascotasForm />
      </main>
    </>
  );
};

export default App;
