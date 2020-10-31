/**
 * withRouter : utilizada para obtener las propiedades de enrutamiento (params, history, location, etc)
 *  en un componente que NO haya sido renderizado directamente por el componente <Route><Route/>
 * alfinal loexportamos evolviendo    export default withRouter(MascotasTabla);
 */

import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import { getMascotas } from "../../../services/mascotas";

const MascotasTabla = (props) => {
  const [mascotas, setMascotas] = useState([]);

  // redireccionamos al dar clic
  const goToMascotasVer = (mascota_id) => {
    // NOTA: NO confundir la funcion push de los arreglos, con la funcionpush del objeto history.
    // esta ultima es para redireccionarnos de ruta programaticamente
    props.history.push(`/mascotas/${mascota_id}`);
  };

  const traerMascotas = async () => {
    getMascotas().then((data) => {
      setMascotas(data);
    });

    // getMascotas().then(setMascotas); // setMascotas haciendo un callback
  };

  useEffect(() => {
    traerMascotas();
  }, []);

  return (
    <div className="row mt-4">
      <div className="table-responsive">
        <table className="table table-striped table-hover table-bordered text-center">
          <thead>
            <tr>
              <th>Id</th>
              <th>Nombre</th>
              <th>Colores</th>
              <th>Activo</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {mascotas.map((m) => (
              <tr key={m.mascota_id}>
                <td>{m.mascota_id}</td>
                <td>{m.mascota_nombre}</td>
                <td>{m.mascota_colores}</td>
                <td>{m.mascota_activo.toString()}</td>
                <td>
                  <button
                    type="button"
                    className="btn btn-secondary btn-block"
                    onClick={() => {
                      goToMascotasVer(m.mascota_id);
                    }}
                  >
                    Ver Detalles
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

// cuando usamos la funcion withRouter como envoltura de un componete
// el componente recibira en sus props todos los objetos de enrutamiento

export default withRouter(MascotasTabla);
