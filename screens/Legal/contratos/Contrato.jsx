//Archivo Conntrato.jsx

import React, { useEffect, useState } from 'react'
import { NavLink, Navigate, useNavigate, useParams } from 'react-router-dom'
import Loading from '../../../components/Loading';
import axios from 'axios';
import ContratoTemplate from './ContratoTemplate';
import { PDFViewer } from '@react-pdf/renderer';
import ReactDOMServer from 'react-dom/server';


const Contrato = () => {

  const navigate = useNavigate()
  const [ loading,setLoading ] = useState(true);
  const [ err,setErr ] = useState(false)

  const [ detail,setDetail ] = useState(null)

  const params = useParams()
  useEffect(() => {
    console.log(params)
    infoContrato()
    //setLoading(false)
  }, [])

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
      console.log(detail)
      const contenidoPDF = ContratoTemplate({detail:detail});
      //const contenidoBase64 = btoa(unescape(encodeURIComponent(contenidoPDF)));
      //const contenidoBase64 = btoa(unescape(encodeURIComponent(JSON.stringify(contenidoPDF))));

      //const contenidoString = contenidoPDF.toString();

      // Convertir la cadena a base64
      //const contenidoBase64 = btoa(unescape(encodeURIComponent(contenidoString)));

      const contenidoHTML = ReactDOMServer.renderToStaticMarkup(contenidoPDF);

      // Convertir la cadena HTML a base64
      const contenidoBase64 = btoa(unescape(encodeURIComponent(contenidoHTML)));


      const response = await axios.post('http://localhost:3000/legal/contrato', {
        adjunto: contenidoBase64,
      });
      console.log(response)
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
            <>
              <button onClick={()=>{navigate(`/contratos/imprimir/${params.id}`)}}>PDF</button>
              <button onClick={enviarContratoPorEmail}>Enviar Contrato</button>
              <div style={{border:"1px solid black",boxSizing:"border-box",width:"50%",padding:20}}>
                <h2>Cliente</h2>
                <div>Tipo de cliente: {detail.detalle.Cliente.tipo}</div>
                <div>RUT: {detail.detalle.Cliente.rut}</div>
                <div>Nombre/Razon social: {detail.detalle.Cliente.razon_social}</div>
                <h3>Contacto:</h3>
                <div>Telefono: {detail.detalle.Cliente.telefono}</div>
                <div>Email: {detail.detalle.Cliente.mail}</div>
              </div>

              
              <div style={{border:"1px solid black",boxSizing:"border-box",width:"50%",padding:20}}>Planes</div>
            </>
          }
        </>
      }
      
    </>
  )
}

export default Contrato



