import React from 'react'
import { useNavigate } from 'react-router-dom'

const HomeScreen = () => {
  const navigate = useNavigate()

  return (
    <>
        <h1>Home Screen Private</h1>
        <button onClick={()=>{navigate('/contratos')}}>Ver contratos</button>
    </>
  )
}

export default HomeScreen