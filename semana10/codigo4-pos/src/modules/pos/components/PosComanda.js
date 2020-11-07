import React, { useContext } from 'react';
import MesaContext from '../context/mesa/MesaContext';
import PosComandaItem from './PosComandaItem';
import Swal from "sweetalert2";

const PosComanda = () => {

    const { globalPedidos, globalObjMesa, globalPagar } = useContext(MesaContext);

    let pedidoActual;

    // no usamos filter, pues nos devolvera un arreglo vacio en caso no haya coincidencia
    // en cambio, find, me retorna undefined si no encuentra coincidencia
    if (globalObjMesa) {
        pedidoActual = globalPedidos.find(pedido => pedido.mesa_id === globalObjMesa.mesa_id);
    }


    return (
        <div className="comanda">
            <h4 className="comanda__mesa">Mesa 01</h4>
            <p className="comanda__usuario">Carlos Jimenez</p>
            <hr />

            <ul className="comanda__lista">

                {
                    globalObjMesa ?
                        pedidoActual ?
                            pedidoActual.platos.map(plato => {
                                return <PosComandaItem key={plato.plato_id} plato={plato} />
                            })
                            :
                            <span>Esta mesa no tiene pedidos</span>
                        :
                        <span>No se ha seleccionado ninguna mesa</span>
                }

            </ul>

            <button
                className="boton boton-success boton-block"
                onClick={() => {
                    if (!globalObjMesa) return;

                    Swal.fire({
                        title: "Confirmar pago",
                        text: "Los cambios se haran efecto en la base de datos",
                        icon: "question",
                        showCancelButton: true,
                    }).then(({ isConfirmed }) => {
                        if (isConfirmed) {
                            globalPagar();
                        }

                        // si isConfirmed es true, entonces ejecutar globalPagar()
                        // isConfirmed && globalPagar();
                    });

                }}
            >
                PAGAR
            </button>
        </div>
    )
}

export default PosComanda;
