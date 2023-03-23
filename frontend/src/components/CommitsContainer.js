import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import CommitDetail from "./CommitDetail";
import { useAppContext } from "../context/AppContext";

const CommitsContainer = () => {

    const [commits, setCommits] = useState([]);
    const {setNumber} = useAppContext();
    let {number} = useAppContext();
    

    useEffect(() => {
        async function retrieveCommits() {
            await axios.get('http://localhost:3001/commits').then((response) => {
                setCommits(response.data);
                setNumber(response.data.length + 1);
            }).catch((error) => {
                console.log(error);
            })
        }

        retrieveCommits();
    }, []);

    return (
        <div className="flex justify-center flex-wrap flex-col bg-white">
            <h1 className="text-3xl font-bold underline text-center my-5">
                Github Commits
            </h1>
            <div className="justify-center flex flex-wrap gap-5">
                {commits.map((c) => {
                    number--;
                    return <CommitDetail key={c.sha} commit={c} num={number} />
                })}
            </div>
        </div>
    )
}

export default CommitsContainer;