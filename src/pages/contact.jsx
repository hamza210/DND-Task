import React from 'react'
import { useNavigate } from 'react-router-dom'

const Contact = () => {
    const navigate = useNavigate()
  return (
    <div>
      Contact

      <div>
      <button onClick={() => navigate('/')}>Home</button>
      </div>
      <div>
      <button onClick={() => navigate('/user')}>USer</button>
      </div>
      <div>

      <button onClick={() => navigate('/about')}>About</button>
      </div>
    </div>
  )
}

export default Contact
