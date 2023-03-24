import React, { useEffect } from "react";
import UniqueCommitDetail from "./UniqueCommitDetail";
import { useAppContext } from "../context/AppContext";
import { useParams } from "react-router-dom";

const UniqueCommitContainer = () => {

    const {shaID} = useParams();
    const { uniquecommit } = useAppContext();
    const { retrieveCommitBySHA } = useAppContext();

    useEffect(() => {
        retrieveCommitBySHA(shaID);
    }, [])

    return (
        <div>
            <h1 className="text-3xl text-black font-bold text-center my-5">
                A commit
            </h1>
            {uniquecommit.map((c => {
                return <UniqueCommitDetail commit={c} key={c.sha} />
            }))}
        </div>

    )
}

export default UniqueCommitContainer;