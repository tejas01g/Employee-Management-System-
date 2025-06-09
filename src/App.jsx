import React, { useState } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboar from './components/Dashboard/EmployeeDashboar'
import AdminDashboard from './components/Dashboard/AdminDashboard'
// import { getLocalStorage, setLocalStorage } from './utils/localStorage'

const App = () => {
  const [user, setUser] = useState(null)

  const handleLogin = (email, password) => {
    if (email === 'admin@me.com' && password === '123') {
      console.log("This is admin")
      setUser({ role: 'admin', email })
    }
    else if (email === 'user@me.com' && password === '123') {
      console.log("This is user")
      setUser({ role: 'employee', email })
    }
    else {
      alert("Invalid Credentials")
    }
  }
  // handleLogin()
  return (
    <>
      {!user ? <Login handleLogin={handleLogin} />: ''}
      {user?.role === 'admin' && <AdminDashboard />}
      {user?.role === 'employee' && <EmployeeDashboar />}
    </>
  )
}

export default App
