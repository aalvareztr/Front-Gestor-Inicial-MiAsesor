import { createContext, useState } from "react";

export const AppContext = createContext()


export const AppContextProvider = (props) =>{
    
    const [ logged,setLogged ] = useState(false);

    //Rol de usuario
    const [ userProp,setUserProp ] = useState(null);

    return(
        <AppContext.Provider value={{
            logged,setLogged,
            userProp,setUserProp
        }}>
            {props.children}
        </AppContext.Provider>
    )
}