import React, { useContext } from 'react'
import ContadorContext from '../context/contador/ContadorContext'

const Boton = () => {

    // consumimos directamente del context
    const localContadorContext = useContext(ContadorContext);

    return (

        <button onClick={()=>{
            // ya que la funcion sumar, es compartida por el context. Por tanto, podemos utilizarla.
            localContadorContext.sumar();
        }}>
            Click Sumar "contador = {localContadorContext.cuenta}"
        </button>

    )
}

export default Boton;
