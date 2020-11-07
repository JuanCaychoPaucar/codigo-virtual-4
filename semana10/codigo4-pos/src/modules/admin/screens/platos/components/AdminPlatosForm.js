import React, { useEffect, useRef, useState } from 'react';
import Swal from 'sweetalert2';
import { getCategorias } from '../../../../../services/categoriasServices';
import { postImagenByPlatoId, postPlatoSinImagen } from '../../../../../services/platosServices';

const formularioVacio = {
    plato_nom: "",
    plato_pre: 0,
    categoria_id: 0,
}

const AdminPlatosForm = ({ traerPlatos }) => {

    const [formulario, setFormulario] = useState(formularioVacio);
    const [categorias, setCategorias] = useState([]);

    /**
     * archivoRef sera una variable que puede ser usada para tomar un elemento delDOM, 
     * es decir, vincular un elemento del DOM con una variable (como un getElementByID)
     * NOTA: el elemento vinculado del DOM se encontrara en el objeto:
     * archivoRef.current
     * archivoRef.classList("nombre_de_la_clase");
     */
    const archivoRef = useRef();

    const traerCategorias = async () => {
        const data = await getCategorias();
        if (data.ok) {
            setCategorias(data.content);
        }
    };


    const handleChange = (e) => {
        setFormulario({
            ...formulario,
            [e.target.name]: e.target.value,
        });
    };

    const onSubmit = (e) => {
        e.preventDefault();

        // allowOutsideClick, deniega el derecho de hacer clic fuera del cuadro de sweetalert.
        // la unica forma de cerrar este sweetalert, sera lanzando otro sweetalert que si pueda cancelar o cerrar
        Swal.fire({
            title: "Espere...",
            text: "Estamos subiendo la informacion al servidor",
            icon: "info",
            showConfirmButton: false,
            allowOutsideClick: false,
        });


        // console.log(archivoRef.current); // es parecido a hacer let archivo = document.getElementByID("id_del_input"); console.log(archivo)

        const objPlato = {
            ...formulario,
            plato_img: "",
        };

        postPlatoSinImagen(objPlato).then(data => {
            if (data.ok) {
                const plato_id = data.content.plato_id;

                //current.files[0], siempre es asi para type files
                postImagenByPlatoId(plato_id, archivoRef.current.files[0]).then(
                    rpta => {
                        // console.log(rpta);
                        if (rpta.ok) {
                            setFormulario(formularioVacio);
                            traerPlatos();

                            // quitar la imagen del input file
                            archivoRef.current.value = "";

                            Swal.fire({
                                title: "Hecho!",
                                icon: "success",
                                text: "El plato y su imagen fueron creados con exito",
                                timer: 1500,
                                showConfirmButton: false,
                            });
                        }
                    }
                );
            }
        });
    };

    useEffect(() => {
        traerCategorias();
    }, []);

    return (
        <div className="row mb-4">
            <div className="col">
                <div className="card shadow">
                    <div className="card-body">
                        <form onSubmit={onSubmit}>
                            <div className="form-group">
                                <label htmlFor="">Nombre del Plato</label>
                                <input type="text" placeholder="Ejm: Cebiche"
                                    className="form-control"
                                    value={formulario.plato_nom}
                                    name="plato_nom"
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="">Precio del Plato:</label>
                                <input type="number" className="form-control"
                                    value={formulario.plato_pre}
                                    name="plato_pre"
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="">Seleccione Categoría</label>
                                <select name="" className="form-control"
                                    value={formulario.categoria_id}
                                    name="categoria_id"
                                    onChange={handleChange}
                                >
                                    <option value="0">--Seleccione Categoría--</option>
                                    {
                                        categorias.map(categoria => {
                                            return <option key={categoria.categoria_id} value={categoria.categoria_id}>{categoria.categoria_nom}</option>
                                        })
                                    }
                                </select>
                            </div>

                            <div className="form-group">
                                <label htmlFor="">Subir imagen del plato</label>

                                {/* ref es una propiedad de todo elemento del DOM de REACT
                                para relacionar una variable creada con useref()para su manipluacion*/}
                                <input type="file" name="" id="" className="form-control" ref={archivoRef} />
                            </div>

                            <div className="form-group">
                                <button className="btn btn-primary" type="submit">Crear Plato</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminPlatosForm;
