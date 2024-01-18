import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import HomeScreen from '../screens/Contabilidad/HomeScreen'

const Contabilidad = () => {
  return (
    <Routes>
      <Route path='/' element={<HomeScreen/>} />
      <Route path='/login' element={<Navigate to='/'/>}/>
    </Routes>
  )
}

export default Contabilidad