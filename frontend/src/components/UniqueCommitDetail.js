import React from "react";

const UniqueCommitDetail = ({commit}) => {
    return (
        <div>
            {commit.sha}
            {commit.commit.message}
            {commit.author.login}
        </div>

    )
}

export default UniqueCommitDetail;