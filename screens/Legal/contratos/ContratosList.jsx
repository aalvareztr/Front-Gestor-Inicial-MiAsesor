import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import Loading from '../../../components/Loading';

const ContratosList = () => {
  
  const navigate = useNavigate();
  
  const [ loading,setLoading ] = useState(true);
  const [ contratos,setContratos ] = useState([])
  const contractsPerPage = 3; // Adjust the number of contracts per page as needed
  const [currentPage, setCurrentPage] = useState(1);



  useEffect(() => {
    getContratos()
  }, [])
  
  async function getContratos (){
    try{
      const response = await axios.get('http://localhost:3000/legal/contratos',{withCredentials:true});
      setContratos(response.data.contratos)
      console.log(response.data.contratos)
    }catch(err){
      console.log(err)
    }finally{
      setLoading(false)
    }
  }
     // Calculate the index range for contracts to display on the current page
  const indexOfLastContract = currentPage * contractsPerPage;
  const indexOfFirstContract = indexOfLastContract - contractsPerPage;
  const currentContracts = contratos.slice(indexOfFirstContract, indexOfLastContract);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  return (
    <>
    {
      loading === true?
      <Loading/>
      :
      <>
            <h1>Contratos</h1>
            {/* Contracts per page dropdown */}
      <label>
        Contratos por pagina:{' '}
        <select value={contractsPerPage} onChange={(e) => setContractsPerPage(Number(e.target.value))}>
          <option value={5}>5</option>
          <option value={10}>10</option>
          <option value={15}>15</option>
        </select>
      </label>
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
              
               currentContracts.map((contratos, index)=>
                <tr  key={index}>
                  <td style={{border:"1px solid black",padding:"20px"}}>{contratos.fecha.slice(0,10)}</td>
                  <td style={{border:"1px solid black",padding:"20px"}}>{contratos.Cliente.razon_social}</td>
                  <td style={{border:"1px solid black",padding:"20px"}}>Firmado</td>
                  <td style={{border:"1px solid black",padding:"20px"}}>
                    <NavLink to={`/contratos/${contratos.idContrato}`}>Ver</NavLink>
                  </td>
                </tr>
              )
            }
          </tbody>
            </table>
             {/* Pagination buttons */}
      <div className="pagination">
        {[...Array(Math.ceil(contratos.length / contractsPerPage))].map((_, index) => (
          <button key={index} onClick={() => paginate(index + 1)}>
            {index + 1}
          </button>
        ))}
      </div>
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