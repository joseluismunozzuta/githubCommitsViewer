import React from "react";
import {Link} from 'react-router-dom';
import dateFormat from "dateformat";

const CommitDetail = ({ commit, num }) => {

    let date = commit.commit.author.date;
    let newdate = dateFormat(date, "mmmm d, yyyy");
    let newtime = dateFormat(date, "HH:MM:ss");

    return (
        <div className="card w-96 bg-violet-600 shadow-xl">
            <figure><img className="max-h-fit" src={commit.author.avatar_url} alt="authorOfCommit" /></figure>
            <div className="card-body justify-start">
                <h2 className="card-title h-32 text-white">
                    {commit.commit.message}
                    <div className="badge badge-secondary">#{num}</div>
                </h2>
                <p className="font-light text-slate-300">This commit was done by <span className="font-bold italic">{commit.commit.author.name}</span> on
                    <span className="italic font-bold"> {newdate}</span> at <span className="font-bold italic"> {newtime}</span></p>
                <div className=" text-zinc-300 flex flex-col flex-wrap justify-center">
                    <p className="text-sm text-center font-extralight my-2">SHA:</p>
                    <div className="badge badge-outline">{commit.sha}</div>
                    <Link className="btn btn-warning fw-bold text-capitalize p-2" to={`/viewcommit`}>View Commit</Link>
                </div>
            </div>
        </div>
    )
}
export default CommitDetail;