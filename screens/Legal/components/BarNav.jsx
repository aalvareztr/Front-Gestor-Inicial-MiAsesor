import React, { useState } from 'react'

const BarNav = () => {
  const [ openSubMenu,setOpenSubMenu ] = useState(false)
  return (
    <header className='bar_nav'>
        <div onClick={()=>{setOpenSubMenu(!openSubMenu)}} className='bar_nav_profile_img'>P</div>
        {
          openSubMenu === true ?
          <div className='bar_nav_submenu'>
            <div>Perfil</div>
          </div>
          :
          <></>
        }
        
    </header>
  )
}

export default BarNav