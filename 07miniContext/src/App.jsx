import React from 'react'
import UserContextProvider from './assets/contexts/UserContextProvider'
import Login from './assets/components/Login'
import Profile from './assets/components/Profile'

function App() {

  return (
    <UserContextProvider>
      <Login />
      <Profile />
    </UserContextProvider>
  )
}

export default App
