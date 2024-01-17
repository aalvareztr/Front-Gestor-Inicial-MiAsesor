import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import HomeScreen from '../screens/HomeScreen'
import ContratosList from '../screens/contratos/ContratosList'
import Contrato from '../screens/contratos/Contrato'
import ContratoPreview from '../screens/contratos/ContratoPreview'
const PrivateRoutes = () => {
  return (
    <Routes>
         {/*contratos*/}
        <Route path='/' element={<HomeScreen/>}/>
        <Route path='/contratos' element={<ContratosList/>}/>
        <Route path='/contratos/:id' element={<Contrato/>}/>
        <Route path='/contratos/imprimir/:id' element={<ContratoPreview/>}/>

        {/*LOGIN*/}
        <Route path='/login' element={<Navigate to='/'/>}/>

    </Routes>
  )
}

export default PrivateRoutes