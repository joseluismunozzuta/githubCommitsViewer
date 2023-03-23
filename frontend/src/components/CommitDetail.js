import React from "react";
import dateFormat from "dateformat";

const CommitDetail = ({ commit, num }) => {

    let date = commit.commit.author.date;
    let newdate = dateFormat(date, "mmmm d, yyyy");
    let newtime = dateFormat(date, "HH:MM:ss");

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={commit.author.avatar_url} alt="authorOfCommit" /></figure>
            <div className="card-body justify-start">
                <h2 className="card-title h-32 text-white">
                    {commit.commit.message}
                    <div className="badge badge-secondary">#{num}</div>
                </h2>
                <p className="font-light">This commit was done by <span className="font-bold italic">{commit.commit.author.name}</span> on
                    <span className="italic font-bold"> {newdate}</span> at <span className="font-bold italic"> {newtime}</span></p>
                <div className="flex flex-col flex-wrap justify-center">
                    <p className="text-sm text-center font-extralight my-2">SHA:</p>
                    <div className="badge badge-outline">{commit.sha}</div>
                </div>
            </div>
        </div>
    )
}
export default CommitDetail;