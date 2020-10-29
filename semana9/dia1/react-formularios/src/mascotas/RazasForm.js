import React, { useState } from "react";
import { postRaza, putRaza } from "./services/raza";
import Swal from "sweetalert2";
import { useEffect } from "react";

const formularioVacio = {
  raza_nombre: "",
};

const RazasForm = ({ traerRazas, razaEditar }) => {
  // creamos las variables de estado
  const [formulario, setFormulario] = useState(formularioVacio);
  const [modo, setModo] = useState("crear");

  // cada vez que escribimos en el formulario, se va actualizando la variable de estado formulario
  const handleChange = (e) => {
    // console.log(e.target.value);
    setFormulario({ ...formulario, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // verificar campo vacio
    if (formulario.raza_nombre.trim() === "") {
      Swal.fire({
        title: "Que pasa mi chamo!!!",
        text: "El campo nombre de la raza no debe estar vacío",
        icon: "warning",
      });
      return;
    }

    // si todo esta correcto
    if (modo === "crear") {
      Swal.fire({
        title: "¿Registrar raza?",
        text: "Se guardará en la base de datos",
        icon: "question",
        showCancelButton: true,
      }).then(({ isConfirmed }) => {
        if (isConfirmed) {
          // creamos el registro de la raza
          postRaza(formulario).then((data) => {
            //   console.log(data);
            if (data.raza_id) {
              traerRazas();
              setFormulario(formularioVacio);
              Swal.fire({
                title: "Registrado!",
                text: "Raza registrada correctamente",
                icon: "success",
                showConfirmButton: false,
                timer: 1500,
              });
            }
          });
        }
      });
    } else {
      // modo editar
      Swal.fire({
        title: "¿Editar raza?",
        text: "Seguro que desea editar el registro de la raza",
        icon: "question",
        showCancelButton: true,
      }).then(({ isConfirmed }) => {
        if (isConfirmed) {
          // creamos el registro de la raza
          putRaza({ ...formulario }).then((rpta) => {
            //   console.log(data);
            if (rpta.status === 200) {
              setFormulario(formularioVacio);
              setModo("crear");
              traerRazas();

              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Registro actualizado",
                showConfirmButton: false,
                timer: 1000,
              });
            }
          });
        }
      });
    }
  };

  useEffect(() => {
    if (razaEditar !== null) {
      setFormulario(razaEditar);
      setModo("editar");
    }
  }, [razaEditar]);

  return (
    <div className="row">
      <div className="col-12">
        <div className="card shadow">
          <div className="card-body">
            <form className="row" onSubmit={handleSubmit}>
              <div className="form-group col-md-6">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Ingrese nombre de la raza"
                  name="raza_nombre"
                  value={formulario.raza_nombre}
                  onChange={handleChange}
                />
              </div>

              {/* BOTONES */}
              <div className="form-group col-md-3">
                <button className="btn btn-block btn-primary" type="submit">
                  {modo === "crear" ? "Crear raza" : "Guardar Cambios"}
                </button>
              </div>

              <div className="form-group col-md-3">
                <button
                  className="btn btn-block btn-danger"
                  type="button"
                  onClick={() => {
                    setFormulario(formularioVacio);
                    setModo("crear");
                  }}
                >
                  Cancelar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RazasForm;
