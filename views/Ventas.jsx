import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'

const Ventas = () => {
  return (
    <Routes>
        <Route path='/' element={<div>Home Screen de ventas</div>}/>
        <Route path='/login' element={<Navigate to='/'/>}/>
    </Routes>
  )
}

export default Ventas