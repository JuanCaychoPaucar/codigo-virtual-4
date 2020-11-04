import React from "react";
import { Route, Switch } from "react-router-dom";
import ClienteHeader from "./components/ClienteHeader";
import ClienteBuscadorScreen from "./screens/buscador/ClienteBuscadorScreen";
import ClienteComprasScreen from "./screens/compras/ClienteComprasScreen";
import ClientePerfilScreen from "./screens/perfil/ClientePerfilScreen";

const ClienteRouter = () => {
  return (
    <>
      <ClienteHeader />
      <div className="bg-info altura-100">
        <main className="container text-dark">
          <Switch>
            <Route path={"/cliente/compras"} component={ClienteComprasScreen}/>
            <Route path={"/cliente/perfil"} component={ClientePerfilScreen}/>
            <Route path={"/cliente/buscador"} component={ClienteBuscadorScreen}/>
            <Route path={"/cliente"} component={ClientePerfilScreen}/>
          </Switch>
        </main>
      </div>
    </>
  );
};

export default ClienteRouter;

/**
 * ClienteRouter será un segundo enrutador.
 * Ya no necesitamos el componente <Router>, pues ya esta en la envoltura principal.
 * Además, solo debe de haber un <Router>
 */