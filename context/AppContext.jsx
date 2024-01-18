import { createContext, useState } from "react";

export const AppContext = createContext()


export const AppContextProvider = (props) =>{
    
    const [ logged,setLogged ] = useState(false);

    //Rol de usuario
    const [ role,setRole ] = useState(null);
    
    return(
        <AppContext.Provider value={{
            logged,setLogged
        }}>
            {props.children}
        </AppContext.Provider>
    )
}