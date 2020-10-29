import React from "react";
import { MDBDataTable } from "mdbreact";
import Swal from "sweetalert2";
import { deleteTipoPorId } from "./services/tipo";

const TiposTabla = ({ tipos, traerTipos, setTipoEditar }) => {
  const eliminarTipoPorId = (id) => {
    Swal.fire({
      title: "¿Eliminar?",
      icon: "error",
      text: "Los cambios seran irreversibles",
      showCancelButton: true,
    }).then(({ isConfirmed }) => {
      if (isConfirmed) {
        deleteTipoPorId(id).then((data) => {
            // console.log(data.data.tipo_id);
          if (data.data.tipo_id) {
            traerTipos();
            Swal.fire({
              title: "Eliminado!!",
              icon: "success",
              text: "Registro eliminado satisfactoriamente",
              timer: 1500,
            });
          }
        });
      }
    });
  };

  // tabla
  const data = {

    columns: [
      {
        label: "Id",
        field: "tipo_id",
      },

      {
        label: "Nombre",
        field: "tipo_nombre",
      },

      {
        label: "Acciones",
        field: "acciones",
      },
    ],

    rows: tipos.map((t) => {
      return {
        ...t,
        acciones: (
          <>
            <button
              className="btn btn-secondary mr-2"
              onClick={() => {
                setTipoEditar({ ...t });
              }}
            >
              Editar
            </button>
            <button
              className="btn btn-danger"
              onClick={() => {
                eliminarTipoPorId(t.tipo_id);
              }}
            >
              Eliminar
            </button>
          </>
        ),
      };
    }),
  };

  return (
    <div className="row mt-4">
      <div className="col-12">
        <div className="card shadow">
          <div className="card-body">
          <h2 className="text-center">Tipos</h2>
            <MDBDataTable
              className="text-center"
              responsive
              striped
              bordered
              hover
              data={data}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TiposTabla;
