import React, { useState } from "react";
import { useEffect } from "react";
import Swal from "sweetalert2";
import { postMascota, putMascota } from "./services/mascota";

const formularioVacio = {
  mascota_nombre: "",
  mascota_raza: 0,
  mascota_tipo: 0,
  mascota_edad: 0,
  mascota_colores: "",
  mascota_activo: false,
};

const MascotasForm = ({ traerMascotas, mascotaEditar, setMascotas }) => {
  const [formulario, setFormulario] = useState(formularioVacio);
  const [modo, setModo] = useState("crear");

  const handleChange = (e) => {
    let valor =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;

    // console.log(valor);

    setFormulario({
      ...formulario,
      [e.target.name]: valor,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("formulariooo");
    console.log(formulario);

    // verificar campo vacio
    if (
      (formulario.mascota_nombre.trim() === "") |
      (formulario.mascota_colores.trim() === "") |
      (formulario.mascota_raza == "0") |
      (formulario.mascota_tipo == "0")
    ) {
      Swal.fire({
        title: "Que pasa mi chamo!!!",
        text: "Los campos no deben estar vacíos",
        icon: "warning",
      });
      return;
    }

    // si todo esta correcto
    if (modo === "crear") {
      // console.log(formulario.mascota_raza);
      Swal.fire({
        title: "¿Registrar mascota?",
        text: "Se guardará en la base de datos",
        icon: "question",
        showCancelButton: true,
      }).then(({ isConfirmed }) => {
        if (isConfirmed) {
          // crear el registro de la mascota
          postMascota(formulario).then((data) => {
            if (data.mascota_id) {
              traerMascotas();
              setFormulario(formularioVacio);
              Swal.fire({
                title: "Registrado!",
                text: "mascota registrada correctamente",
                icon: "success",
                showConfirmButton: false,
                timer: 1500,
              });
            }
          });
        }
      });
    } else {
      // asumimos que estamos en el modo editar
      Swal.fire({
        title: "¿Editar?",
        text: "¿Seguro que desea editar el registro de la mascota?",
        icon: "question",
        showCancelButton: true,
      }).then(({ isConfirmed }) => {
        if (isConfirmed) {
          putMascota({ ...formulario }).then((rpta) => {
            if (rpta.status === 200) {
              setMascotas([]);
              setFormulario(formularioVacio);
              setModo("crear");
              traerMascotas();

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

  // useEffect(() => {
  //   console.log("use effect vacio");
  // },[]);

  // useEffect(() => {
  //   console.log("use effect cuando cambia el formulario");
  // },[formulario]);

  useEffect(() => {
    // console.log("use effect cuando cambia la mascotaEditar");
    if (mascotaEditar !== null) {
      setFormulario(mascotaEditar);
      setModo("editar");
    }
  }, [mascotaEditar]); // ejecuatar el useEffect, cada vez que mascotaEditar cambia

  return (
    <div className="row">
      <div className="col-12">
        <div className="card shadow">
          <div className="card-body">
            <form className="row" onSubmit={handleSubmit}>
              {/* NOMBRE */}
              <div className="form-group col-md-6">
                <label htmlFor="">Nombre:</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Ingrese nombre"
                  name="mascota_nombre"
                  value={formulario.mascota_nombre}
                  onChange={handleChange}
                />
              </div>

              {/* RAZA */}
              <div className="form-group col-md-6">
                <label htmlFor="">Raza:</label>
                <select
                  className="form-control"
                  name="mascota_raza"
                  value={formulario.mascota_raza}
                  onChange={handleChange}
                >
                  <option value="0">Seleccione</option>
                  <option value="1">Bull Terrier</option>
                </select>
              </div>

              {/* COLORES */}
              <div className="form-group col-md-6">
                <label htmlFor="">Colores:</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Ingrese colores"
                  name="mascota_colores"
                  value={formulario.mascota_colores}
                  onChange={handleChange}
                />
              </div>

              {/* EDAD */}
              <div className="form-group col-md-6">
                <label htmlFor="">
                  Edad{" "}
                  <span className="text-danger">
                    (dejar en 0 si aún no cumple el año)
                  </span>
                </label>
                <input
                  type="number"
                  min="0"
                  pattern="^[0-9]+"
                  className="form-control"
                  name="mascota_edad"
                  value={formulario.mascota_edad}
                  onChange={handleChange}
                />
              </div>

              {/* TIPO */}
              <div className="form-group col-md-6">
                <label htmlFor="">Tipo</label>
                <select
                  className="form-control"
                  name="mascota_tipo"
                  value={formulario.mascota_tipo}
                  onChange={handleChange}
                >
                  <option value="0">Seleccione</option>
                  <option value="1">Perro</option>
                </select>
              </div>

              {/* REGISTRO ACTIVO */}
              <div className="form-group col-md-6">
                <label htmlFor="">¿Registro activo?</label>
                <div className="input-group mb-3">
                  <div className="input-group-prepend">
                    <div className="input-group-text">
                      <input
                        type="checkbox"
                        // checked, es el campo análogo a value
                        // y sólo acepta valores booleanos (true/false)
                        aria-label="Checkbox for following text input"
                        name="mascota_activo"
                        checked={formulario.mascota_activo}
                        onChange={handleChange}
                        id="checkActivo"
                      />
                    </div>
                  </div>
                  <label htmlFor="checkActivo" className="form-control">
                    Activo
                  </label>
                </div>
              </div>

              {/* BOTONES */}
              <div className="form-group col-md-6">
                <button className="btn btn-block btn-primary" type="submit">
                  {modo === "crear" ? "Crear mascota" : "Guardar Cambios"}
                </button>
              </div>

              <div className="form-group col-md-6">
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

export default MascotasForm;
