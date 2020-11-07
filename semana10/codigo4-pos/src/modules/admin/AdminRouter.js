import React from 'react'
import { Route, Switch } from 'react-router-dom';
import RutaPrivada from '../../RutaPrivada';
import AdminHeader from './components/AdminHeader';
import AdminDashboardScreen from './screens/dashboard/AdminDashboardScreen';
import AdminPedidosScreen from './screens/pedidos/AdminPedidosScreen';
import AdminPlatosScreen from './screens/platos/AdminPlatosScreen';

const AdminRouter = () => {
    return (
        <>
            <AdminHeader />

            <main className="container pt-5">
                <Switch>
                    <RutaPrivada path={"/admin/platos"} componente={AdminPlatosScreen}/> {/* le enviamos las props: path y componente */}
                    {/* <Route path={"/admin/platos"} component={AdminPlatosScreen} /> */}
                    <Route path={"/admin/pedidos"} component={AdminPedidosScreen} />
                    <Route path={"/admin"} component={AdminDashboardScreen} />  {/* la ruta mas general va abajo */}
                </Switch>
            </main>

        </>
    )
}

export default AdminRouter;
