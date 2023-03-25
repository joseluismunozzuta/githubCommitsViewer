import './App.css';
import React from 'react';
import Top from './components/Top';
import CommitsContainer from './components/CommitsContainer';
import AppContextProvider from './context/AppContext';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UniqueCommitContainer from './components/UniqueCommitContainer';
import RepoInfoInput from './components/RepoInfoInput';
import Footer from './components/Footer';

function App() {

  return (
    <AppContextProvider>
      <BrowserRouter>
        <Top/>
        <Routes>
          <Route path='/' element={<CommitsContainer/>} />
          <Route path='/viewcommit/:shaID' element={<UniqueCommitContainer />} />
          <Route path='/repoInput' element={<RepoInfoInput />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </AppContextProvider>
  );
}

export default App;
