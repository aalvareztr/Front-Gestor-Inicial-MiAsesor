import { useContext, useEffect, useState } from 'react'
import './App.css'
import { AppContext } from '../context/AppContext'
import Loading from '../components/Loading'
import AppRouter from '../router/AppRouter'
import { server_url } from '../env'
import axios from 'axios'
import { jwtDecode } from 'jwt-decode'

function App() {
  const { setLogged,setUserProp } = useContext(AppContext);
  const [ err ] = useState(false)
  const [ loading,setLoading ] = useState(true);

  useEffect(() => {
    const tknData = getCookieData()
    tknData ? verifyTkn(tknData) : denyAcces()
  }, [])
  

  //Obtener cookie almacenada, si existe true si no null 
  const getCookieData = () => {
    const jwtCookie = document.cookie.split('; ').find(row => row.startsWith('tkn='))
    return jwtCookie ? jwtCookie : null
  }

  //Verificar si el token esta autorizado
  async function verifyTkn (tknData) {
    console.log('verificanndo')
    try {      
      await axios.get(`${server_url}/api/check-auth`, { withCredentials: true })
      const decode = jwtDecode(tknData)
      setUserProp(decode)
      authAcces()
    } catch (err) {
      console.log(err)
      denyAcces()
    }
  } 

  //autorizar acceso
  function authAcces (){
    setLogged(true)
    setLoading(false)
  }

  //denegar acceso
  function denyAcces (){
    setLogged(false)
    setLoading(false)
  }


  return (
    <>
      {
        loading === true ?
        <Loading/>
        :
        <>
        {
          err === true ?
          <div>Error</div>
          :
          <AppRouter/>
        }
        </>
      }
      
    </>
  )
}

export default App
