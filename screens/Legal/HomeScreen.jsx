import React from 'react'
import { NavLink } from 'react-router-dom'

const HomeScreen = () => {
  return (
    <>
        <h1>Home Screen de Legal</h1>
        <NavLink to='/contratos'>Contratos</NavLink>
    </>
  )
}

export default HomeScreen