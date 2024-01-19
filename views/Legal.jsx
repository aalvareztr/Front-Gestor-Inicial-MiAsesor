import React from 'react'
import { NavLink, Navigate, Route, Routes } from 'react-router-dom'
import HomeScreen from '../screens/Legal/HomeScreen'
import ContratosList from '../screens/Legal/contratos/ContratosList'
import Contrato from '../screens/Legal/contratos/Contrato'
import ContratoPreview from '../screens/Legal/contratos/ContratoPreview'
import BarNav from '../screens/Legal/components/BarNav'
import Aside from '../components/Aside'
import { IoHomeOutline } from "react-icons/io5";
import { RiFileCopy2Line } from "react-icons/ri";


const Legal = () => {
  return (
    <> 
      <BarNav/>
      <div className='main'>
        <Aside>
          <NavLink to='/' style={{display:"flex",gap:7,alignItems:"center",textDecoration:"none",color:'black',fontSize:18}}>
            <IoHomeOutline/>
            <span>Home</span>
          </NavLink>
          <NavLink to='/contratos' style={{display:"flex",gap:7,alignItems:"center",textDecoration:"none",color:'black',fontSize:18}}>
            <RiFileCopy2Line/>
            <span>Contratos</span>
          </NavLink>
        </Aside>
        <div className='screen_view'>
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
      

      </div>
    </>
    
  )
}

export default Legal