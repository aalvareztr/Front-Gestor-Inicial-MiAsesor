import { useContext, useEffect, useState } from 'react'
import './App.css'
import { AppContext } from '../context/AppContext'
import Loading from '../components/Loading'
import AppRouter from '../router/AppRouter'
import { server_url } from '../env'
import axios from 'axios'

function App() {
  const { setLogged } = useContext(AppContext);
  const [ err,setErr ] = useState(false)
  const [ loading,setLoading ] = useState(true);

  useEffect(() => {
    const tknData = getCookieData()
    console.log(tknData)
    tknData  === true ? verifyTkn() : denyAcces()
  }, [])
  

  //Obtener cookie almacenada, si existe true si no null 
  const getCookieData = () => {
    const jwtCookie = document.cookie.split('; ').find(row => row.startsWith('tkn='))
    return jwtCookie ? true : null
  }


  //Verificar si el token esta autorizado
  async function verifyTkn () {
    console.log('verificanndo')
    try {      
      await axios.get(`${server_url}/api/check-auth`, { withCredentials: true })
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
