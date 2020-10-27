import React, { useState } from "react";
import Swal from "sweetalert2";

const Formulario = () => {
  /**
   * en el formulario, colocamos en el atributo "name",
   * el mismo nombre del campo que hace referencia al atributo del objeto
   */
  const [formulario, setFormulario] = useState({
    nombre: "",
    apellido: "",
    fecha: "2020-10-26",
  });

  const handleChange = (e) => {
    // muestra el nombre del elemento: e.target.name
    // console.log(e.target.name);

    // [campo] pasamos el contenido de la variable y le coloca ""
    let campo = e.target.name;

    setFormulario({
      ...formulario, //conservamos el valor anterior
      [campo]: e.target.value, // lo reemplazamos con el nuevo valor
    });
  };

  const submit = (e) => {
    // para evitar la recarga de la pagina
    e.preventDefault();

    console.log("Enviando formulario");
    console.log(formulario);
    Swal.fire({
      title: "Creado!",
      text: "Usuario creado correctamente",
      icon: "success",
      timer: 2000,
      showConfirmButton: false,
    });

    //limpiar formulario
    setFormulario({
      nombre: "",
      apellido: "",
      fecha: "2020-10-26",
    });
  };

  return (
    <div className="row">
      <div className="col-12">
        <div className="card shadow">
          <div className="card-body">
            <form onSubmit={submit}>
              {/* evento onSubmit, referenciamos a la funcion submit */}
              <div className="form-group">
                <label htmlFor="">Nombre:</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Ingrese su nombre"
                  name="nombre"
                  value={formulario.nombre}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="">Apellido:</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Ingrese su apellido"
                  name="apellido"
                  value={formulario.apellido}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="">Fecha de nacimiento:</label>
                <input
                  type="date"
                  className="form-control"
                  placeholder="Ingrese su apellido"
                  name="fecha"
                  value={formulario.fecha}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <button className="btn - btn-dark" type="submit">
                  Crear Usuario
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Formulario;
