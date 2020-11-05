import React, { useContext } from 'react'
import MesaContext from '../context/mesa/MesaContext';

const PosMesa = ({ objMesa }) => {

    // consumir un contexto
    const { globalObjMesa, seleccionarMesaGlobal } = useContext(MesaContext);
    console.log(globalObjMesa);

    return (
        // globalObjMesa?, significa: si es que el objeto tuviese la propiedad mesa_id
        // se llama operador optional
        
        <li className={`mesas__mesa ${globalObjMesa?.mesa_id === objMesa.mesa_id ? "activo" : ""}`}
            onClick={() => {
                seleccionarMesaGlobal({ ...objMesa })
            }}>
            <span className="mesas__titulo">Mesa</span>
            <span className="mesas__numero">{objMesa.mesa_nro}</span>
        </li>
    )
}

export default PosMesa;
