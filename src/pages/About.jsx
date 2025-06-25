import React from 'react'
import { useNavigate } from 'react-router-dom'

function About() {
  const navigate = useNavigate()
  return (
    <div>
      <h1 className="text-6xl mb-4">Github Finder</h1>
      <p>This is a React App To Find The Github User And To see The Repository Of them.</p>
      <div>

      <button onClick={() => navigate('/')}>Home</button>
      </div>
      <div>

      <button onClick={() => navigate('/user')}>user</button>
      </div>
      <div>

<button onClick={() => navigate('/contact')}>contact</button>
</div>
    </div>
  )
}

export default About
