import React, { useEffect, useState } from 'react'
import { getCategorias } from '../../../services/categoriasServices';

const PosCategorias = () => {

    const [categorias, setCategorias] = useState([]);
    const [cargando, setCargando] = useState(true);

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
                        <button key={objCategoria.categoria_id} className="boton boton-outline-primary">{objCategoria.categoria_nom}</button>
                    ))
            }
        </div>
    )
}

export default PosCategorias;
