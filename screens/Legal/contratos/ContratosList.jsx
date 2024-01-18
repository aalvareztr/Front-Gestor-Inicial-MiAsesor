import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import Loading from '../../../components/Loading';

const ContratosList = () => {
  
  const navigate = useNavigate();
  
  const [ loading,setLoading ] = useState(true);
  const [ contratos,setContratos ] = useState([])

  useEffect(() => {
    getContratos()
  }, [])
  
  async function getContratos (){
    try{
      const response = await axios.get('http://localhost:3000/api/contratos',{withCredentials:true});
      setContratos(response.data.contratos)
      console.log(response.data.contratos)
    }catch(err){
      console.log(err)
    }finally{
      //setTimeout(()=>{setLoading(false)},3000)
      setLoading(false)
    }
  }

  return (
    <>
    {
      loading === true?
      <Loading/>
      :
      <>
        <h1>Contratos</h1>
        <table>
          <thead>
            <tr>
              <th style={{border:"1px solid black"}}>Fecha</th>
              <th style={{border:"1px solid black"}}>Razon Social / Nombre</th>
              <th style={{border:"1px solid black"}}>Estado</th>
              <th style={{border:"1px solid black"}}>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {
              
              contratos.map((item,index)=>
                <tr  key={index}>
                  <td style={{border:"1px solid black"}}>{item.fecha.slice(0,10)}</td>
                  <td style={{border:"1px solid black"}}>{item.razon_social}</td>
                  <td style={{border:"1px solid black"}}>Firmado</td>
                  <td style={{border:"1px solid black"}}>
                    <NavLink to={`/contratos/${item.idContrato}`}>Ver</NavLink>
                  </td>
                </tr>
              )
            }
          </tbody>
        </table>
      </>
    }
    {
      /*
    
        

        
      */
    }
    </>
  )
}

export default ContratosList