import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'

const Contabilidad = () => {
  return (
    <Routes>
      <Route path='/' element={<div>Home Screenn de conntabilidad</div>} />
      <Route path='/login' element={<Navigate to='/'/>}/>
    </Routes>
  )
}

export default Contabilidad