import React from 'react'
import { Route, Switch } from 'react-router-dom'
import ClienteHeader from './components/ClienteHeader'

const ClienteRouter = () => {
    return (
        <>
            <ClienteHeader />
            <div className="bg-info altura-100">
                <main className="container text-dark">
                    <Switch>
                        <Route path={"/cliente/compras"} />
                        <Route path={"/cliente/perfil"} />
                        <Route path={"/cliente/buscador"} />
                        <Route path={"/cliente"} />
                    </Switch>
                </main>
            </div>
        </>
    )
}

export default ClienteRouter
