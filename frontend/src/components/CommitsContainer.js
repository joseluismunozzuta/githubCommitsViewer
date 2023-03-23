import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import CommitDetail from "./CommitDetail";
import { useAppContext } from "../context/AppContext";

const CommitsContainer = () => {

    let { numbercommits } = useAppContext();
    const { nextCommit } = useAppContext();
    const [commits, setCommits] = useState([]);
    let [number, setNumber] = useState(0);

    useEffect(() => {
        async function retrieveCommits() {
            try {
                const commits = await axios.get('http://localhost:3001/commits');
                setCommits(commits.data);
                setNumber(commits.length);
            } catch (err) {
                console.log(err);
            }
        }

        retrieveCommits();
    }, []);

    return (
        <div className="flex justify-center flex-wrap flex-col">
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