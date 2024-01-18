import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import HomeScreen from '../screens/Legal/HomeScreen'
import ContratosList from '../screens/Legal/contratos/ContratosList'
import Contrato from '../screens/Legal/contratos/Contrato'
import ContratoPreview from '../screens/Legal/contratos/ContratoPreview'
import BarNav from '../screens/Legal/components/BarNav'

const Legal = () => {
  return (
    <>
      <BarNav/>
      <div>
      <Routes>
        <Route path='/' element={<HomeScreen/>}/>
        <Route path='/login' element={<Navigate to='/'/>}/>
        {/*Ruta de contratos*/}
        <Route path='/contratos' element={<ContratosList/>}/>
        <Route path='/contratos/:id' element={<Contrato/>}/>
        <Route path='/contratos/imprimir/:id' element={<ContratoPreview/>}/>

        <Route path='/*' element={<div>Nada que ver por aqui</div>}/>
      </Routes>

      </div>
    </>
    
  )
}

export default Legal