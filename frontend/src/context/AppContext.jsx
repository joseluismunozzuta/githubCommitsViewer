import React, {createContext, useContext, useState} from 'react';

const AppContext = createContext();

export const useAppContext = () => useContext(AppContext);

const AppContextProvider = ({children}) => {

    let [number, setNumber] = useState(0);
    
    return <AppContext.Provider value={{number, setNumber}}>{children}</AppContext.Provider>
}

export default AppContextProvider;