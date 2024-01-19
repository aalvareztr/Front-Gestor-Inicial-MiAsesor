import React, { useContext, useState } from 'react'
import { AppContext } from '../context/AppContext'
import axios from 'axios';
import { server_url } from '../env';
import { jwtDecode } from "jwt-decode";
import Swal from 'sweetalert2';
import Loading from '../components/Loading';

const LoginScreen = () => {

  const { setLogged,setUserProp } = useContext(AppContext); 
  const [ loading,setLoading ] = useState(false);

  const [ userData,setUserData ] = useState({username:'',password:''})

  function submit (e){
    e.preventDefault()
    userData.username.trim() !== "" && userData.password.trim() !== "" ? login () : Swal.fire({title:"Error!",text:"Debes completar toodos los campos",icon:"error"})
  }

  async function login () {
    setLoading(true)    
    try{
      const response = await axios.post(`${server_url}/api/login`,userData)
      const decodedToken = jwtDecode(response.data.token);
      setUserProp(decodedToken)
      document.cookie =  `tkn=${response.data.token};path=/`
      setLogged(true)
    }catch(err){
      Swal.fire({
        title: "Error!",
        text: err.response.data.message,
        icon: "error"
      });
      setLogged(false)
    }finally{
      setLoading(false)
    }
  }

  return (
    <>
    {
      loading === true ?
      <Loading/>
      :
      <div className='login_bg'>
        <form onSubmit={submit} className='login_form'>
          <h1 style={{textAlign:"center"}}>Iniciar sesion</h1>
          <input className='login_input' placeholder='username' type='text' onChange={(e)=>{setUserData({...userData,username:e.target.value})}}/>
          <input className='login_input' placeholder='password' type='password' onChange={(e)=>{setUserData({...userData,password:e.target.value})}}/>
          <button style={{padding:"12px 0px"}} type='submit'>Enviar</button>
        </form>
      </div>
    }
    </>
    
  )
}

export default LoginScreen