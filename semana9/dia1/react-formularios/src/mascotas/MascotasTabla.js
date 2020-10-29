import React from "react";
import Toggle from "react-toggle";
import "react-toggle/style.css";
import { MDBDataTable } from "mdbreact";
import { deleteMascotaById, putMascota } from "./services/mascota";
import Swal from "sweetalert2";

const MascotasTabla = ({ mascotas, traerMascotas, setMascotaEditar }) => {
  const eliminarmascotaporId = (id) => {
    Swal.fire({
      title: "¿Eliminar?",
      icon: "error",
      text: "Los cambios seran irreversibles",
      showCancelButton: true,
    }).then(({ isConfirmed }) => {
      if (isConfirmed) {
        deleteMascotaById(id).then((data) => {
          // si la data tiene un atributo mascota_id, quiere decir que si se ha eliminado
          if (data.mascota_id) {
            console.log(mascotas);
            traerMascotas();
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

  const handleChangeToggle = (estado, objMascota) => {
    putMascota({ ...objMascota, mascota_activo: estado }).then((rpta) => {
      // console.log(rpta);
      if (rpta.status === 200) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Registro actualizado",
          showConfirmButton: false,
          timer: 1000,
        });
      }
    });
  };

  const data = {
    columns: [
      {
        label: "Id", // Texto del th
        field: "mascota_id", // nombre del campo del objeto que debe coincidir en las rows
      },
      {
        label: "Nombre",
        field: "mascota_nombre",
      },

      {
        label: "Raza",
        field: "mascota_raza",
      },

      {
        label: "Colores",
        field: "mascota_colores",
      },

      {
        label: "Tipo",
        field: "mascota_tipo",
      },

      {
        label: "Edad",
        field: "mascota_edad",
      },

      {
        label: "Activo",
        field: "mascota_activo",
      },

      {
        label: "Acciones",
        field: "acciones",
      },
    ],

    rows: mascotas.map((m) => {
      return {
        ...m,
        mascota_activo: (
          <Toggle
            defaultChecked={m.mascota_activo}
            // checked={m.mascota_activo}
            onChange={(e) => {
              handleChangeToggle(e.target.checked, { ...m });
            }}
          />
        ),
        acciones: (
          <>
            <button
              className="btn btn-secondary mr-2"
              onClick={() => {
                setMascotaEditar({ ...m });
              }}
            >
              Editar
            </button>
            <button
              className="btn btn-danger"
              onClick={() => {
                eliminarmascotaporId(m.mascota_id);
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

export default MascotasTabla;
