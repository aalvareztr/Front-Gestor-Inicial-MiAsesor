import React, { useContext, useState } from 'react'
import { AppContext } from '../context/AppContext'
import axios from 'axios';
import { server_url } from '../env';
import { jwtDecode } from "jwt-decode";
import Swal from 'sweetalert2';

const LoginScreen = () => {

  const { setLogged,setUserProp } = useContext(AppContext);

  const [ userData,setUserData ] = useState({username:'',password:''})

  function submit (e){
    e.preventDefault()
    userData.username.trim() !== "" && userData.password.trim() !== "" ? login () : Swal.fire({title:"Error!",text:"Debes completar toodos los campos",icon:"error"})
  }

  async function login () {    
    try{
      const response = await axios.post(`${server_url}/api/login`,userData)
      const decodedToken = jwtDecode(response.data.token);
      setUserProp(decodedToken)
      document.cookie =  `tkn=${response.data.token};path=/`
    }catch(err){
      Swal.fire({
        title: "Error!",
        text: err.response.data.message,
        icon: "error"
      });
      setLogged(false)
    }
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