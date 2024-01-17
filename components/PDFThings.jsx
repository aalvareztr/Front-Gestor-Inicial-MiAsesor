import { PDFDownloadLink, PDFViewer } from '@react-pdf/renderer'
import React, { useEffect, useState } from 'react'
import PDF from './PDF'

const PDFThings = () => {
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
        <div>Loading...</div>
        :
        <div style={{display:"flex",flexDirection:"column"}}>

          <PDFDownloadLink document={<PDF/>} fileName='myfirstpdf.pdf'>
              {
                  ({loading, url, error, blob}) => loading ? <div>Loading documennt</div> : <button>Downald now</button>
              }
          </PDFDownloadLink>
          <PDFViewer style={{height:"100vh"}}>
              <PDF/>
          </PDFViewer>
        </div>
      }
    </>
    
  )
}

export default PDFThings