import React from 'react'

const Cargando = () => {
    return (
        <div>
            <div className="alert alert-info text-center" role="alert">
                <h4 className="alert-heading">Cargando ...</h4>
                <div className="spinner-border text-info" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
                <p></p>
                <p className="mb-0"></p>
            </div>
        </div>
    )
}

export default Cargando
