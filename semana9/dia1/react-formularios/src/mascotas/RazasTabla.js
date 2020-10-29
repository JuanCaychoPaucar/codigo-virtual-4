import React from "react";
import { MDBDataTable } from "mdbreact";
import Swal from "sweetalert2";
import { deleteRazaPorId } from "./services/raza";

const RazasTabla = ({ razas, traerRazas, setRazaEditar }) => {
  const eliminarRazaPorId = (id) => {
    Swal.fire({
      title: "¿Eliminar?",
      icon: "error",
      text: "Los cambios seran irreversibles",
      showCancelButton: true,
    }).then(({ isConfirmed }) => {
      if (isConfirmed) {
        deleteRazaPorId(id).then((data) => {
            // console.log(data.data.raza_id);
          if (data.data.raza_id) {
            traerRazas();
            Swal.fire({
              title: "Eliminado!!",
              icon: "success",
              text: "Registro eliminado satisfactoriamente",
              showConfirmButton: false,
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
        field: "raza_id",
      },

      {
        label: "Nombre",
        field: "raza_nombre",
      },

      {
        label: "Acciones",
        field: "acciones",
      },
    ],

    rows: razas.map((r) => {
      return {
        ...r,
        acciones: (
          <>
            <button
              className="btn btn-secondary mr-2"
              onClick={() => {
                setRazaEditar({ ...r });
              }}
            >
              Editar
            </button>
            <button
              className="btn btn-danger"
              onClick={() => {
                eliminarRazaPorId(r.raza_id);
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
          <h2 className="text-center">Razas</h2>
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

export default RazasTabla;
