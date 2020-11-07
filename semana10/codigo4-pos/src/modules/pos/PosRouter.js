import React from 'react';
import { Switch } from 'react-router-dom';
import PosControlScreen from './screens/control/PosControlScreen';
import MesaState from './context/mesa/MesaState';
import RutaPrivada from '../../RutaPrivada';

import "./../../sass/pos.scss";

const PosRouter = () => {
    return (
        <MesaState>
            <Switch>
                <RutaPrivada path={"/pos/control"} componente={PosControlScreen} />
            </Switch>
        </MesaState>
    )
}

export default PosRouter;

// PosRouter realizará el subenrutamiento. Ya no necesita de <Router>, pues solo debe de haber uno.