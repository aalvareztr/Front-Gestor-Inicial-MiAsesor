import { PDFDownloadLink, PDFViewer } from '@react-pdf/renderer'
import React, { useEffect, useState } from 'react'
import Loading from '../../../components/Loading';
import ContratoTemplate from './ContratoTemplate';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { server_url } from '../../../env';

const ContratoPreview = () => {
  const [ loading,setLoading ] = useState(true);

  const [ err,setErr ] = useState(false);
  
  const [ detail,setDetail ] = useState(null)

  const params = useParams();

  useEffect(() => {
    console.log(params.id)
    //setTimeout(mostrarMensaje, 3500);
    infoContrato()
  }, [])
  
  function mostrarMensaje (){
    setLoading(false)
  }

  
  async function infoContrato (){
    try{
      const response = await axios.get(`${server_url}/api/contrato?idContrato=${params.id}`,{withCredentials:true})
      console.log(response.data.cliente[0])
      setDetail(response.data)
    }catch(err){
      setErr(true)
      console.log(err)
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
        <>
        {
          err === true ?
          <div>Error</div>  
          :
          <div style={{display:"flex",flexDirection:"column"}}>
            <PDFDownloadLink document={<ContratoTemplate detail={detail}/>} fileName='myfirstpdf.pdf'>
              {
                  ({loading, url, error, blob}) => loading ? <div>Loading documennt</div> : <button>Downald now</button>
              }
            </PDFDownloadLink>
            <PDFViewer style={{height:"100vh"}}>
              <ContratoTemplate detail={detail}/>
            </PDFViewer>
          </div>
        }
        </>
      }
    </>
    
  )
}

export default ContratoPreview