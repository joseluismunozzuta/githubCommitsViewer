import { useEffect } from "react";
import React from "react";
import { useAppContext } from "../context/AppContext";

const CommitDetail = ({ commit, num }) => {

    let {numbercommits} = useAppContext();
    const {nextCommit} = useAppContext();
    let temp;

    useEffect(() => {
        nextCommit();
        console.log(numbercommits);
        temp = numbercommits;
    }, [])

    return (
    <div className="card w-96 bg-base-100 shadow-xl">
        <figure><img src={commit.author.avatar_url} alt="authorOfCommit" /></figure>
        <div className="card-body">
            <h2 className="card-title">
                Commit Number {num}
                <div className="badge badge-secondary">Commit</div>
            </h2>
            <p>{commit.commit.message}</p>
            <div className="card-actions justify-end">
                <div className="badge badge-outline">{commit.commit.author.name}</div>
                <div className="badge badge-outline">{commit.commit.author.date}</div>
            </div>
        </div>
    </div>
    )
}
export default CommitDetail;