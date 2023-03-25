import React, { useState, useEffect } from "react";
import '../input.css';

const RepoInfoInput = () => {

    const [repoName, setRepoName] = useState('');
    const [owner, setOwner] = useState('');
    const [isDisabled, setIsDisabled] = useState(true);

    const handleRepoChange = (event) => {
        setRepoName(event.target.value);
    };

    const handleOwnerChange = (event) => {
        setOwner(event.target.value);
    };

    useEffect(() => {
        setIsDisabled(repoName === '' || owner === '');
    }, [repoName, owner]);

    return (
        <div className="flex justify-center">
            <div className="inputContainer w-full">
                <div className="repo-wrapper flex flex-row justify-center my-16 max-sm:flex-col max-sm:gap-8">
                    <div className="flex justify-center w-fit h-fit">
                        <img src="https://firebasestorage.googleapis.com/v0/b/static-images-ee67c.appspot.com/o/githubICO.png?alt=media&token=5635f93e-e359-48d6-ac3e-b4e10a06568c" alt="#" />
                    </div>
                    <div className="repoinfo-div text-center p-16">
                        <h1>Github Repo Info</h1>
                        <h2>The repository must be public</h2>
                        <form action="#" className="form my-4">
                            <label htmlFor="owner">Owner</label>
                            <input type="text" value={owner} onChange={handleOwnerChange} />
                            <label htmlFor="reponame">Repository name</label>
                            <input type="text" value={repoName} onChange={handleRepoChange} />
                            <button type="submit" disabled={isDisabled}>Check Repo</button>
                        </form>
                    </div>

                </div>
            </div>
        </div>

    )

}

export default RepoInfoInput;