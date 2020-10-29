import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import TiposForm from "./TiposForm";
import TiposTabla from "./TiposTabla";
import { getTipos } from "./services/tipo";

const Tipos = () => {
  const [tipos, setTipos] = useState([]);
  const [tipoEditar, setTipoEditar] = useState(null);

  const traerTipos = async () => {
    const data = await getTipos();
    // console.log(data);
    setTipos(data);
  };

  useEffect(() => {
    traerTipos();
  }, []);

  return (
    <>
      <TiposForm traerTipos={traerTipos} tipoEditar={tipoEditar} />

      <TiposTabla
        tipos={tipos}
        traerTipos={traerTipos}
        setTipoEditar={setTipoEditar}
      />
    </>
  );
};

export default Tipos;

