import React from "react";
import { useEffect } from "react";
import { useParams } from 'react-router-dom';
import CommitDetail from "./CommitDetail";
import { useAppContext } from "../context/AppContext";

const CommitsContainer = () => {

    const { ownerName, repo } = useParams();
    let { fetchError } = useAppContext();
    const {setFetcherror} = useAppContext();
    let { number } = useAppContext();
    const { retrieveCommits } = useAppContext();
    const { retrieveOtherCommits } = useAppContext();
    const { commits } = useAppContext();

    useEffect(() =>{
        console.log(fetchError);
    })

    useEffect(() => {
        if (!repo) {
            setFetcherror(false);
            retrieveCommits();
        } else {
            retrieveOtherCommits(ownerName, repo);
        }

    }, [repo]);

    return (
        <>
            {!fetchError && <div className="flex justify-center flex-wrap flex-col bg-white">
                <h1 className="text-3xl text-black font-bold text-center my-5">
                    Github Commits
                </h1>



                <h2 className="text-center text-base-300">Repository name: <span className="font-bold">{repo || 'githubCommitsViewer'}</span></h2>
                <h2 className="text-center text-base-300">Owner: <span className="font-bold">{ownerName || 'joseluismunozzuta'}</span></h2>
                <div className="my-8 justify-center flex flex-wrap gap-16">
                    {commits.map((c) => {
                        number--;
                        return <CommitDetail key={c.sha} commit={c} num={number} />
                    })}
                </div>
            </div>}

            {fetchError && <div>ERROR</div>}
        </>

    )
}

export default CommitsContainer;