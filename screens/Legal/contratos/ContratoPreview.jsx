//Archivo ContratoPreview.js (esto se ve cuando se da click sobre el boton PDF del archivo Contrato.jsx)

import { PDFDownloadLink, PDFViewer } from '@react-pdf/renderer'
import React, { useEffect, useRef, useState } from 'react'
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

  const pdfViewerRef = useRef(); // Crear el ref para PDFViewer


  useEffect(() => {
    console.log(params.id)
    infoContrato()
  }, [])
  
  function mostrarMensaje (){
    setLoading(false)
  }

  
  async function infoContrato (){
    try{
      const response = await axios.get(`http://localhost:3000/legal/contratos/${params.id}`,{withCredentials:true})
      console.log(response.data)
      setDetail(response.data)
    }catch(err){
      setErr(true)
      console.log(err)
    }finally{
      setLoading(false)
    }
  }

  const enviarContratoPorEmail = async () => {
    try {
      const pdfContentBase64 = await pdfViewerRef.current.toBase64();
      const response = await axios.post('http://localhost:3000/legal/contrato', {
        //destinatario: detail.detalle.Cliente.mail,
        //asunto: 'Contrato de Servicio',
        adjunto: pdfContentBase64,
      });

      console.log(response.data);
    } catch (error) {
      console.error('Error al enviar el contrato por correo electrónico:', error);
    }
  };

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
            <button onClick={enviarContratoPorEmail} style={{width:"fit-content"}}>Enviar</button>
            <PDFViewer ref={pdfViewerRef} style={{height:"500px"}}>
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