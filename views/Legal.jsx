import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'

const Legal = () => {
  return (
    <Routes>
        <Route path='/' element={<div>Home Screenn Legal</div>}/>
        <Route path='/login' element={<Navigate to='/'/>}/>
    </Routes>
  )
}

export default Legal