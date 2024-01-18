import React, { useEffect, useState } from 'react'
import { NavLink, Navigate, useNavigate, useParams } from 'react-router-dom'
import Loading from '../../../components/Loading';

const Contrato = () => {

  const navigate = useNavigate()
  const [ loading,setLoading ] = useState(true);
  const [ err,setErr ] = useState(false)

  const params = useParams()
  useEffect(() => {
    setLoading(false)
  }, [])

  async function getData (){
    try{
      //const response = await 
    }catch(err){
      //
    }finally{
      //
    }
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
            <>
              <div>Vista del contrato</div>
              <div>Vendedor</div>
              <div>Cliennte</div>
              <div>Planes</div>
              <button onClick={()=>{navigate('/contratos/imprimir/a7ea9d15-ea17-4aa6-ad55-5b5649c988ef')}}>PDF</button>
            </>
          }
        </>
      }
      
    </>
  )
}

export default Contrato