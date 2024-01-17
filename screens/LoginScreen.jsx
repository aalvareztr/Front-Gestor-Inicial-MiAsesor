import React, { useContext, useState } from 'react'
import { AppContext } from '../context/AppContext'
import axios from 'axios';
import { server_url } from '../env';

const LoginScreen = () => {

  const { logged,setLogged } = useContext(AppContext);

  const [ userData,setUserData ] = useState({username:'',password:''})

  function submit (e){
    e.preventDefault()
    userData.username.trim() !== "" && userData.password.trim() !== "" ? login () : alert('debe rellenar todos los campos')
  }


  async function login () {
    userData.username === "test" && userData.password === "1234" ? setLogged(true) : alert('contrasena o usuario incorrecto')
    /*
    try{
      const response = await axios.put(`${server_url}/login`,userData)
      console.log(response)
    }catch(err){
      console.log(err)
      setLogged(false)
    }finally{
      setLogged(true)
    }
    */
  }

  return (
    <div className='login_bg'>
        <form onSubmit={submit} className='login_form'>
          <input type='text' onChange={(e)=>{setUserData({...userData,username:e.target.value})}}/>
          <input type='password' onChange={(e)=>{setUserData({...userData,password:e.target.value})}}/>
          <button type='submit'>Enviar</button>
        </form>
    </div>
  )
}

export default LoginScreen