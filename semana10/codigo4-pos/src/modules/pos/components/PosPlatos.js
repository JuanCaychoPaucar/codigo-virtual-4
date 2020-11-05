import React, { useContext, useEffect, useState } from 'react'
import { getPlatosByCategoriaId } from '../../../services/categoriasServices';
import MesaContext from '../context/mesa/MesaContext';
import PosPlato from './PosPlato'

const PosPlatos = () => {

    const { globalObjCategoria } = useContext(MesaContext);

    const [platos, setPlatos] = useState([]);

    const traerPlatosPorCategoriaId = async (categoria_id) => {
        const data = await getPlatosByCategoriaId(categoria_id);
        setPlatos(data.content.Platos);
    };

    useEffect(() => {
        if (globalObjCategoria !== null) {
            traerPlatosPorCategoriaId(globalObjCategoria.categoria_id);
        }

    }, [globalObjCategoria]); // useEffect se ejecuta nuevamente cuando cambie la variable globalObjCategoria



    return (
        <div className="carta__platos">

            {
                platos.map(objPlato => {
                    return <PosPlato key={objPlato.plato_id} objPlato={objPlato} />
                })
            }

        </div>
    )
}

export default PosPlatos;
