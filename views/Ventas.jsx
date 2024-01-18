import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import HomeScreen from '../screens/Ventas/HomeScreen'

const Ventas = () => {
  return (
    <Routes>
        <Route path='/' element={<HomeScreen/>}/>
        <Route path='/login' element={<Navigate to='/'/>}/>
    </Routes>
  )
}

export default Ventas