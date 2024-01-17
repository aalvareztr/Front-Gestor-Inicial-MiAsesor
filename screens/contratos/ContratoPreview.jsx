import { PDFDownloadLink, PDFViewer } from '@react-pdf/renderer'
import React, { useEffect, useState } from 'react'
import ContratoTemplate from './ContratoTemplate';
import Loading from '../../components/Loading';

const ContratoPreview = () => {
  const [ loading,setLoading ] = useState(true);

  useEffect(() => {
    setTimeout(mostrarMensaje, 3500);
  }, [])
  
  function mostrarMensaje (){
    setLoading(false)
  }

  return (
    <>
      {
        loading === true ?
        <Loading/>
        :
        <div style={{display:"flex",flexDirection:"column"}}>

          <PDFDownloadLink document={<ContratoTemplate/>} fileName='myfirstpdf.pdf'>
              {
                  ({loading, url, error, blob}) => loading ? <div>Loading documennt</div> : <button>Downald now</button>
              }
          </PDFDownloadLink>
          <PDFViewer style={{height:"100vh"}}>
              <ContratoTemplate/>
          </PDFViewer>
        </div>
      }
    </>
    
  )
}

export default ContratoPreview