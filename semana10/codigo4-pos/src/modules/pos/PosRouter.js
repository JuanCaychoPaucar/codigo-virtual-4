import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PosControlScreen from './screens/control/PosControlScreen';

import "./../../sass/pos.scss";

const PosRouter = () => {
    return (
        <Switch>
            <Route path={"/pos/control"} component={PosControlScreen} />
        </Switch>
    )
}

export default PosRouter;

// PosRouter realizará el subenrutamiento. Ya no necesita de <Router>, pues solo debe de haber uno