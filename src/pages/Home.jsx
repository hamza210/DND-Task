import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate()
  return (
    <div>
      Home
      <div>

      <button onClick={() => navigate('/user')}>USer</button>
      </div>
      <div>

      <button onClick={() => navigate('/about')}>About</button>
      </div>
      <div>

      <button onClick={() => navigate('/contact')}>contact</button>
      </div>
      <div>

      <button onClick={() => navigate('/draganddrop')}>Drag and Drop</button>
      </div>
    </div>
  )
}

export default Home
