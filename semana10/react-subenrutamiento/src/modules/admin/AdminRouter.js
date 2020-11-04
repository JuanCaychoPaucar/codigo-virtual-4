import React from "react";

import { Route, Switch } from "react-router-dom";
import AdminHeader from "./components/AdminHeader";
import AdminClientesScreen from "./screens/clientes/AdminClientesScreen";
import AdminProductosScreen from "./screens/productos/AdminProductosScreen";
import AdminVentasScreen from "./screens/ventas/AdminVentasScreen";
import AdminDashboardScreen from "./screens/dashboard/AdminDashboardScreen";

import "./AdminRouter.scss";

const AdminRouter = () => {
  return (
    <>
      <AdminHeader />
      <div className="bg-dark altura-100">
        <main className="container text-light">
          <Switch>
            <Route path={"/admin/productos"} component={AdminProductosScreen} />
            <Route path={"/admin/clientes"} component={AdminClientesScreen} />
            <Route path={"/admin/ventas"} component={AdminVentasScreen} />
            <Route path={"/admin"} component={AdminDashboardScreen} />
          </Switch>
        </main>
      </div>
    </>
  );
};

export default AdminRouter;

/**
 * AdminRouter será un segundo enrutador. Para ello colocamos un componente <Switch>
 * 
 * Ya no necesitamos el componente <Router>, pues ya esta en la envoltura principal.
 * Además, solo debe de haber un <Router>
 */
