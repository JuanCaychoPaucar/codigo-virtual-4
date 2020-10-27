import React, { useState } from "react";

const MascotasForm = () => {
  const [formulario, setFormulario] = useState({
    nombre: "",
    raza: 0,
    tipo: 0,
    edad: 0,
    colores: "",
    activo: false,
  });

  const handleChange = () => {};

  return (
    <div className="row">
      <div className="col-12">
        <div className="card shadow">
          <div className="card-body">
            <form className="row">
              {/* NOMBRE */}
              <div className="form-group col-md-6">
                <label htmlFor="">Nombre:</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Ingrese nombre"
                  name="nombre"
                  value={formulario.nombre}
                  onChange={handleChange}
                />
              </div>

              {/* RAZA */}
              <div className="form-group col-md-6">
                <label htmlFor="">Raza:</label>
                <select
                  className="form-control"
                  name="raza"
                  value={formulario.raza}
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
                  name="colores"
                  value={formulario.colores}
                  onChange={handleChange}
                />
              </div>

              {/* EDAD */}
              <div className="form-group col-md-6">
                <label htmlFor="">Edad</label>
                <input
                  type="number"
                  className="form-control"
                  name="edad"
                  value={formulario.edad}
                  onChange={handleChange}
                />
              </div>

              {/* TIPO */}
              <div className="form-group col-md-6">
                <label htmlFor="">Tipo</label>
                <select
                  className="form-control"
                  name="tipo"
                  value={formulario.tipo}
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
                        name="activo"
                        checked={formulario.activo}
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
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MascotasForm;
