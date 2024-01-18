import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import Legal from '../views/Legal';
import Ventas from '../views/Ventas';
import Contabilidad from '../views/Contabilidad';

const PrivateRoutes = () => {
  
  const { userProp } = useContext(AppContext);

  function interfaceFilter (){
    const { area } = userProp;
    
    switch (area) {
      case "legal":
        return <Legal/>
      case "ventas":
        return <Ventas/>
      case "contabilidad":
        return <Contabilidad/>
    }
  }
  
  return (
    <> {interfaceFilter()} </>
  )
}

export default PrivateRoutes