import React from "react";
import {useEffect } from "react";
import CommitDetail from "./CommitDetail";
import { useAppContext } from "../context/AppContext";

const GeneralCommitContainer  = () => {

    let {number} = useAppContext();
    const {retrieveCommits} = useAppContext();
    const {commits} = useAppContext();
    

    useEffect(() => {
        retrieveCommits();
    }, []);

    return (
        <div className="flex justify-center flex-wrap flex-col bg-white">
            <h1 className="text-3xl text-black font-bold text-center my-5">
                Github Commits
            </h1>
            <h2 className="text-center text-base-300">Repository name: <span className="font-bold">githubCommitsViewer</span></h2>
            <h2 className="text-center text-base-300">Owner: <span className="font-bold">joseluismunozzuta</span></h2>
            <div className="my-8 justify-center flex flex-wrap gap-16">
                {commits.map((c) => {
                    number--;
                    return <CommitDetail key={c.sha} commit={c} num={number} />
                })}
            </div>
        </div>
    )
}

export default GeneralCommitContainer ;