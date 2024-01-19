import React, { useContext, useState } from 'react';
import { AppContext } from '../../../context/AppContext';
import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';

const BarNav = () => {

  const { setLogged } = useContext(AppContext);
  const [ openSubMenu,setOpenSubMenu ] = useState(false);


  const navigate = useNavigate()

  const [cookies, setCookie, removeCookie] = useCookies(['tkn']);

  async function logOut(){
    removeCookie('tkn', { path: '/' });
    setLogged(false)
    navigate('/login')
  }

  function goToProfile(){
    setOpenSubMenu(false)
    navigate('/profile')
  }


  return (
    <header className='bar_nav'>
        <div onClick={()=>{setOpenSubMenu(!openSubMenu)}} className='bar_nav_profile_img'>P</div>
        {
          openSubMenu === true ?
          <div className='bar_nav_submenu'>
            <div>Perfil</div>
            <div onClick={()=>{logOut()}}>Salir</div>
          </div>
          :
          <></>
        }
        
    </header>
  )
}

export default BarNav