import React from 'react'
import { useNavigate,Outlet } from 'react-router-dom'

const App = () => {
  const navigate = useNavigate()
  return (
    <div>
      {/* <button onClick={() => navigate('/home',{replace: true})}>Home</button> */}
      <Outlet />
    </div>
  )
}

export default App
