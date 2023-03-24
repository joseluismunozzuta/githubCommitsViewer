import React from "react";
import dateFormat from "dateformat";

const UniqueCommitDetail = ({ commit }) => {

    let date = commit.commit.author.date;
    let newdate = dateFormat(date, "mmmm d, yyyy");
    let newtime = dateFormat(date, "HH:MM:ss");

    return (
        <div className="flex justify-end flex-col flex-nowrap px-48 py-10 max-sm:px-10">
            <div className="flex justify-center flex-row my-4 align-middle">
                <h1 className="max-sm:text-sm max-sm:pt-0 text-2xl font-bold text-black mr-2 pt-2 text-center">Simple Hashing Algorithm: </h1>
                <div className="max-sm:text-sm badge badge-primary text-xl h-fit font-extralight p-2">{commit.sha}</div>
            </div>
            <div className="flex justify-center flex-row max-sm:flex-col mt-8">
                <div className="w-1/4 p-8 max-sm:w-full max-sm:px-20">
                    <div className="avatar px-8 my-8">
                        <div className="w-full rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src={commit.committer.avatar_url} alt="#" />
                        </div>
                    </div>
                    <h1 className="text-black font-light text-xl text-center"><span className="font-bold">Committer: </span>{commit.commit.committer.name}</h1>
                </div>
                <div className="overflow-hidden bg-white shadow sm:rounded-3xl w-3/4 max-sm:w-full max-sm:rounded-2xl">
                    <div className="px-4 py-5 sm:px-6">
                        <h3 className="text-base font-semibold leading-6 text-gray-900">Description:</h3>
                        <p className="mt-1 text-xl font-light text-black">{commit.commit.message}</p>
                    </div>
                    <div className="border-t border-gray-200">
                        <dl>
                            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500">Date of commit</dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{newdate}</dd>
                            </div>
                            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500">Hour of commit</dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{newtime}</dd>
                            </div>
                            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500">Committer Github Profile</dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{commit.committer.html_url}</dd>
                            </div>
                            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500">Committer Email</dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{commit.commit.committer.email}</dd>
                            </div>
                            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500">Commit stats</dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                                    <div className="flex flex-row justify-start max-sm:flex-col gap-3">
                                        <div className="badge badge-info badge-outline font-bold">Total changes: {commit.stats.total}</div>
                                        <div className="badge badge-success badge-outline font-bold">Additions: {commit.stats.additions}</div>
                                        <div className="badge badge-error badge-outline font-bold">Deletions: {commit.stats.deletions}</div>
                                    </div>
                                </dd>
                            </div>
                            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500 sm: row-span-6">Files modified</dt>
                                {commit.files.map((f) => {
                                    return <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0" key={f.sha}>
                                        <ul role="list" className="divide-y divide-gray-200 rounded-md border border-gray-200">
                                            <li className="flex items-center justify-between py-3 pl-3 pr-4 text-sm">
                                                <div className="flex w-0 flex-1 items-center">
                                                    <svg className="h-5 w-5 flex-shrink-0 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                        <path fillRule="evenodd" d="M15.621 4.379a3 3 0 00-4.242 0l-7 7a3 3 0 004.241 4.243h.001l.497-.5a.75.75 0 011.064 1.057l-.498.501-.002.002a4.5 4.5 0 01-6.364-6.364l7-7a4.5 4.5 0 016.368 6.36l-3.455 3.553A2.625 2.625 0 119.52 9.52l3.45-3.451a.75.75 0 111.061 1.06l-3.45 3.451a1.125 1.125 0 001.587 1.595l3.454-3.553a3 3 0 000-4.242z" clipRule="evenodd" />
                                                    </svg>
                                                    <span className="ml-2 w-0 flex-1 truncate max-sm:text-xs">{f.filename}</span>
                                                    <span>
                                                        <div className="flex flex-row justify-start max-sm:flex-col gap-3">
                                                            <div className="max-sm:text-xs badge badge-info badge-outline font-bold">Changes: {f.changes}</div>
                                                            <div className="max-sm:text-xs badge badge-success badge-outline font-bold">Additions: {f.additions}</div>
                                                            <div className="max-sm:text-xs badge badge-error badge-outline font-bold">Deletions: {f.deletions}</div>
                                                        </div>
                                                    </span>
                                                </div>
                                            </li>
                                        </ul>
                                    </dd>
                                })}

                            </div>
                        </dl>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default UniqueCommitDetail;