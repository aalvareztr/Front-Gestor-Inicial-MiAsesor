import { createContext, useState } from "react";

export const AppContext = createContext()


export const AppContextProvider = (props) =>{
    const [ logged,setLogged ] = useState(false);
    return(
        <AppContext.Provider value={{
            logged,setLogged
        }}>
            {props.children}
        </AppContext.Provider>
    )
}