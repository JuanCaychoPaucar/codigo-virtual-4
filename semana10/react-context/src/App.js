import React from 'react'
import Formulario from './components/Formulario'
import ContadorState from './context/contador/contadorState'

const App = () => {
  return (
    // <Formulario> seria un props de <ContadorState>
    <ContadorState>
      
      <Formulario /> {/* es el children de <Formulario> */}
      
    </ContadorState>
  )
}

export default App
