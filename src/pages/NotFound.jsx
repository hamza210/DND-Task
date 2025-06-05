import React from 'react'
import { useNavigate } from 'react-router-dom'

const NotFound = () => {
  const navigate = useNavigate()
  return (
    <div>
      not found
<div>

      <button onClick={() => navigate('/')}>Home</button>
</div>
    </div>
  )
}

export default NotFound
