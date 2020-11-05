import React, { useContext, useEffect, useState } from 'react'
import { getCategorias } from '../../../services/categoriasServices';
import MesaContext from '../context/mesa/MesaContext';

const PosCategorias = () => {

    const [categorias, setCategorias] = useState([]);
    const [cargando, setCargando] = useState(true);

    // solo necesitaremos lo siguiente de todo el contexto disponible
    const { globalObjCategoria, seleccionarCategoriaGlobal } = useContext(MesaContext);

    const traerCategorias = async () => {
        const data = await getCategorias();
        if (data.ok) {
            setCategorias(data.content);
            setCargando(false);
        }
    };

    useEffect(() => {
        traerCategorias();
    }, []);

    return (
        <div className="carta__categorias">
            {
                cargando ? <span>cargando...</span> :
                    categorias.map(objCategoria => (
                        <button
                            key={objCategoria.categoria_id}
                            className={`boton boton-outline-primary ${globalObjCategoria?.categoria_id === objCategoria.categoria_id ? "activo" : ""}`}
                            onClick={() => { seleccionarCategoriaGlobal({ ...objCategoria }) }}
                        >
                            {objCategoria.categoria_nom}
                        </button>
                    ))
            }
        </div>
    )
}

export default PosCategorias;
