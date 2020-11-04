import React from 'react'
import Formulario from './components/Formulario'
import ContadorState from './context/contador/ContadorState'

const App = () => {
  return (
    // <Formulario> seria un props de <ContadorState>
    <ContadorState>
      
      <Formulario /> {/* es el children de <Formulario> */}
      
    </ContadorState>
  )
}

export default App;

/**
 * TODOS los componentes seran HIJOS del componenente STATE.
 * Los HIJOS seran las props del componente STATE. las cuales se almacenaran dentro de props.children
 * 
 */
