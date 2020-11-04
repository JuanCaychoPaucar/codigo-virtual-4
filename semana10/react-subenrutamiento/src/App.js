import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AdminRouter from './modules/admin/AdminRouter';
import ClienteRouter from './modules/cliente/ClienteRouter';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path={"/admin"} component={AdminRouter} />
        <Route path={"/cliente"} component={ClienteRouter} />
        {/* <Route path={"/"} exact component={} />
        <Route component={} /> */}
      </Switch>
    </Router>
  )
}

export default App;


/**
 * <Router> : todo se renderiza dentro de dicho componente.
 * <Switch> : va a surtir las diferentes rutas de mi proyecto.
 * <Route>  : cada ruta de mi proyecto. No necesariamente debe de ser un screen.
 * 
 * En App estamos colocando las rutas PRINCIPALES, admin y cliente.
 * Luego, cada una de ellas tendra sus propias subrutas,
 * las cuales las veremos dentro de cada uno de sus componentes (AdminRouter y ClienteRouter)
 */
