import React from 'react'
import AppRouter from './AppRouter'
import AuthState from './modules/auth/context/AuthState'

const App = () => {
  return (
    <AuthState>
      <AppRouter />
    </AuthState>

  )
}

export default App
