import { useContext, useEffect, useState } from 'react'
import './App.css'
import { AppContext } from '../context/AppContext'
import Loading from '../components/Loading'
import AppRouter from '../router/AppRouter'

function App() {
  const { logged,setLogged } = useContext(AppContext);
  const [ err,setErr ] = useState(false)
  const [ loading,setLoading ] = useState(true);

  useEffect(() => {
    setLogged(false);
    setLoading(false);
  }, [])
  

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
