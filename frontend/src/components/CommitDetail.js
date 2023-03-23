import React from "react";

const CommitDetail = ({ commit }) => {
    return (
    <div className="card w-96 bg-base-100 shadow-xl">
        <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
        <div className="card-body">
            <h2 className="card-title">
                New Commit
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