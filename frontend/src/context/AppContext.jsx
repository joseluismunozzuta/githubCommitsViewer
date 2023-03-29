import React, { createContext, useContext, useState } from 'react';
import axios from 'axios';

const AppContext = createContext();

export const useAppContext = () => useContext(AppContext);

const AppContextProvider = ({ children }) => {

    let [fetchError, setFetcherror] = useState(false);
    let [number, setNumber] = useState(0);
    const [commits, setCommits] = useState([]);
    const [uniquecommit, setUniquecommit] = useState([]);

    async function retrieveCommits() {
        await axios.get('https://githubcommitsview-service.onrender.com/api/commits')
        .then((response) => {
            setCommits(response.data);
            setNumber(response.data.length + 1);
        }).catch((error) => {
            console.log(error);
        })
    }

    async function retrieveOtherCommits(owner, reponame){
        await axios.get(`https://githubcommitsview-service.onrender.com/api/commits/other?owner=${owner}&reponame=${reponame}`)
        .then((response) => {
            if(response.data.status === 404){
                console.log("Error in retrieving other commits");
                setFetcherror(true);
            }else if(response.data.status === 403){
                setFetcherror(true);
                console.log("Error in API");
            }else{
                setFetcherror(false);
                setCommits(response.data);
                setNumber(response.data.length + 1);
            }            
        }).catch((error) => {
            console.log(error);
        })
    }

    async function retrieveCommitBySHA(sha, owner, reponame) {
        await axios.get(`https://githubcommitsview-service.onrender.com/api/commits/sha?sha=${sha}&owner=${owner}&reponame=${reponame}`)
        .then((response) => {
            let arr = [];
            arr.push(response.data);
            setUniquecommit(arr);
        }).catch((error) => {
            console.log(error);
        })
    }

    return <AppContext.Provider value={{
        fetchError,
        setFetcherror,
        number,
        setNumber,
        uniquecommit,
        commits,
        retrieveCommitBySHA,
        retrieveCommits,
        retrieveOtherCommits
    }}>{children}</AppContext.Provider>
}

export default AppContextProvider;