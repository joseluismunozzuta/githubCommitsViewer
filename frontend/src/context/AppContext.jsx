import React, {createContext, useContext, useState} from 'react';

const AppContext = createContext();

export const useAppContext = () => useContext(AppContext);

const AppContextProvider = ({children}) => {

    let [numbercommits, setNumbercommits] = useState(0);

    const nextCommit = () => {
        numbercommits++
        setNumbercommits(numbercommits);
    }
    
    return <AppContext.Provider value={{
        numbercommits, 
        nextCommit
    }}>{children}</AppContext.Provider>
}

export default AppContextProvider;