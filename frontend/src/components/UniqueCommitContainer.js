import React, { useEffect } from "react";
import UniqueCommitDetail from "./UniqueCommitDetail";
import { useAppContext } from "../context/AppContext";
import { useParams } from "react-router-dom";

const UniqueCommitContainer = () => {

    const { shaID, owner, reponame } = useParams();
    const { uniquecommit } = useAppContext();
    const { retrieveCommitBySHA } = useAppContext();

    useEffect(() => {
        retrieveCommitBySHA(shaID, owner, reponame);
    }, [])

    return (
        <div className="bg-purple-200">
            {uniquecommit.map((c => {
                return <UniqueCommitDetail commit={c} key={c.sha} />
            }))}
        </div>
    )
}

export default UniqueCommitContainer;