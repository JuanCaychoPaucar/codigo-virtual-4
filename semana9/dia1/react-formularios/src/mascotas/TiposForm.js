import React, { useState } from "react";
import { postTipo, putTipo } from "./services/tipo";
import Swal from "sweetalert2";
import { useEffect } from "react";

const formularioVacio = {
  tipo_nombre: "",
};

const TiposForm = ({ traerTipos, tipoEditar }) => {
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
    if (formulario.tipo_nombre.trim() === "") {
      Swal.fire({
        title: "Que pasa mi chamo!!!",
        text: "El campo nombre del tipo no debe estar vacío",
        icon: "warning",
      });
      return;
    }

    // si todo esta correcto
    if (modo === "crear") {
      Swal.fire({
        title: "¿Registrar tipo?",
        text: "Se guardará en la base de datos",
        icon: "question",
        showCancelButton: true,
      }).then(({ isConfirmed }) => {
        if (isConfirmed) {
          // creamos el registro del tipo
          postTipo(formulario).then((data) => {
            //   console.log(data);
            if (data.tipo_id) {
                traerTipos();
              setFormulario(formularioVacio);
              Swal.fire({
                title: "Registrado!",
                text: "Tipo registrada correctamente",
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
        title: "¿Editar tipo?",
        text: "Seguro que desea editar el registro del tipo",
        icon: "question",
        showCancelButton: true,
      }).then(({ isConfirmed }) => {
        if (isConfirmed) {
          // creamos el registro del tipo
          putTipo({ ...formulario }).then((rpta) => {
            //   console.log(data);
            if (rpta.status === 200) {
              setFormulario(formularioVacio);
              setModo("crear");
              traerTipos();

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
    if (tipoEditar !== null) {
      setFormulario(tipoEditar);
      setModo("editar");
    }
  }, [tipoEditar]);

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
                  placeholder="Ingrese nombre del tipo"
                  name="tipo_nombre"
                  value={formulario.tipo_nombre}
                  onChange={handleChange}
                />
              </div>

              {/* BOTONES */}
              <div className="form-group col-md-3">
                <button className="btn btn-block btn-primary" type="submit">
                  {modo === "crear" ? "Crear tipo" : "Guardar Cambios"}
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

export default TiposForm;
