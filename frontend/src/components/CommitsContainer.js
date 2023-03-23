import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import CommitDetail from "./CommitDetail";

const CommitsContainer = () => {

    const [commits, setCommits] = useState([]);

    useEffect(() => {
        async function retrieveCommits() {
            try {
                const commits = await axios.get('http://localhost:3001/commits');
                setCommits(commits.data);
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
                {commits.map(c => (
                    <CommitDetail key={c.sha} commit={c} />))}
            </div>
        </div>
    )
}

export default CommitsContainer;