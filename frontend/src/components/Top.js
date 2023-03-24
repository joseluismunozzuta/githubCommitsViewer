import React from "react";
import { Link } from "react-router-dom";

const Top = () => {
    return (
        <div className="hero max-h-max" style={{ backgroundImage: `url("https://crowdbotics.ghost.io/content/images/2019/07/github.jpg")` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md py-10">
                    <h1 className="mb-5 text-5xl font-bold">Github Commits Viewer</h1>
                    <p className="mb-5 font-normal text-xl">This application allows to visualize each commit done in the repository where this project has been developed.</p>
                    <Link className="btn btn-primary" to={'/'}>Home</Link>
                </div>
            </div>
        </div>
    )
}

export default Top;