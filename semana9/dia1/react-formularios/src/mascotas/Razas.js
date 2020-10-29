import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import RazasForm from "./RazasForm";
import RazasTabla from "./RazasTabla";
import { getRazas } from "./services/raza";

const Razas = () => {
  const [razas, setRazas] = useState([]);
  const [razaEditar, setRazaEditar] = useState(null);

  const traerRazas = async () => {
    const data = await getRazas();
    // console.log(data);
    setRazas(data);
  };

  useEffect(() => {
    traerRazas();
  }, []);

  return (
    <>
      <RazasForm traerRazas={traerRazas} razaEditar={razaEditar} />

      <RazasTabla
        razas={razas}
        traerRazas={traerRazas}
        setRazaEditar={setRazaEditar}
      />
    </>
  );
};

export default Razas;
