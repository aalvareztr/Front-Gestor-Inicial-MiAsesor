import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import HomeScreen from '../screens/Contabilidad/HomeScreen'
import BarNav from '../screens/Legal/components/BarNav'


const Contabilidad = () => {
  return (
    <>
    <BarNav/>
    <Routes>
      <Route path='/' element={<HomeScreen/>} />
      <Route path='/login' element={<Navigate to='/'/>}/>
    </Routes>
  </>
      )
}

export default Contabilidad