import React from 'react';
import { Route, Switch } from 'react-router-dom';
import AuthLoginScreen from './screens/login/AuthLoginScreen';

import "./../../sass/login.scss";

const AuthRouter = () => {
    return (
        <Switch>
            <Route path={"/auth"} component={AuthLoginScreen} />
        </Switch>
    )
}

export default AuthRouter;
