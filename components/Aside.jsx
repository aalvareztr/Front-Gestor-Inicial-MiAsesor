import React from 'react'
import { NavLink } from 'react-router-dom'

const Aside = ({children}) => {
  return (
    <aside className='aside'>
        {children}
    </aside>
  )
}

export default Aside