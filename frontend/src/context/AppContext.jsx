import React, { createContext, useContext, useState } from 'react';
import axios from 'axios';

const AppContext = createContext();

export const useAppContext = () => useContext(AppContext);

const AppContextProvider = ({ children }) => {

    let [number, setNumber] = useState(0);
    const [commits, setCommits] = useState([]);
    const [uniquecommit, setUniquecommit] = useState([]);

    async function retrieveCommits() {
        await axios.get('http://localhost:3001/commits')
        .then((response) => {
            setCommits(response.data);
            setNumber(response.data.length + 1);
        }).catch((error) => {
            console.log(error);
        })
    }

    async function retrieveCommitBySHA(sha) {
        await axios.get(`http://localhost:3001/commits/sha?sha=${sha}`)
        .then((response) => {
            let arr = [];
            arr.push(response.data);
            setUniquecommit(arr);
        }).catch((error) => {
            console.log(error);
        })
    }

    return <AppContext.Provider value={{
        number,
        setNumber,
        uniquecommit,
        commits,
        retrieveCommitBySHA,
        retrieveCommits
    }}>{children}</AppContext.Provider>
}

export default AppContextProvider;