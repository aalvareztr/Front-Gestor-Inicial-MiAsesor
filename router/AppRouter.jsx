import React, { useContext, useState } from 'react'
import { AppContext } from '../context/AppContext'
import PrivateRoutes from './PrivateRoutes'
import { Navigate, Route, Routes } from 'react-router-dom'
import LoginScreen from '../screens/LoginScreen'

const AppRouter = () => {
  const { logged } = useContext(AppContext)  
  return (
    <>
      {
        logged === true ?
        <PrivateRoutes/>
        :
        <Routes>
          <Route path='/login' element={<LoginScreen/>}/>
          <Route path='/*' element={<Navigate to='/login'/>}/>
        </Routes>
      }
    </>
  )
}

export default AppRouter