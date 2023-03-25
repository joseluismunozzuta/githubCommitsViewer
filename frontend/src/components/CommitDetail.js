import React from "react";
import {Link} from 'react-router-dom';
import dateFormat from "dateformat";

const CommitDetail = ({ owner, reponame, commit, num }) => {

    let date = commit.commit.author.date;
    let newdate = dateFormat(date, "mmmm d, yyyy");
    let newtime = dateFormat(date, "HH:MM:ss");

    return (
        <div className="card w-96 bg-violet-600 shadow-xl">
            <figure><img className="max-h-fit" src={commit.committer ? commit.committer.avatar_url : `https://firebasestorage.googleapis.com/v0/b/static-images-ee67c.appspot.com/o/User-avatar.svg.png?alt=media&token=71f20ac7-f8c4-4e0d-b7f3-0a271a12ed81`} alt="authorOfCommit" /></figure>
            <div className="card-body justify-start">
                <h2 className="card-title h-32 text-white">
                    {commit.commit.message}
                    <div className="badge badge-secondary">#{num}</div>
                </h2>
                <p className="font-light text-slate-300 text-center">This commit was done by <span className="text-white font-bold italic">{commit.commit.committer.name}</span> on
                    <span className="italic font-bold"> {newdate}</span> at <span className="font-bold italic"> {newtime}</span></p>
                <div className=" text-zinc-300 flex justify-center">
                    <Link  className="btn btn-outline btn-secondary text-white mt-4 w-6/12" to={`/viewcommit/${commit.sha}/${owner}/${reponame}`}>View Commit</Link>
                </div>
            </div>
        </div>
    )
}
export default CommitDetail;