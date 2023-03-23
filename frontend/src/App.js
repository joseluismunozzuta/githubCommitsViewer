import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {

  const [commits, setCommits] = useState([]);

  useEffect(() => {
    async function retrieveCommits() {
      try {
        const commits = await axios.get('http://localhost:3001/commits');
        setCommits(commits.data);
      } catch (err) {
        console.log(err);
      }
    }

    retrieveCommits();

  }, []);

  return (
    <div className="Github Commit Viewer">
      <h1 className="text-3xl font-bold underline">
        Github Commits
      </h1>
      <table>
        <thead>
          <tr>
            <th>Commit</th>
            <th>Author</th>
            <th>Date</th>
            <th>Message</th>
          </tr>
        </thead>
        <tbody>
          {commits.map((commit) => (
            <tr key={commit.sha}>
              <td>{commit.sha}</td>
              <td>{commit.commit.author.name}</td>
              <td>{commit.commit.author.date}</td>
              <td>{commit.commit.message}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
