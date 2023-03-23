import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Top from './components/Top';
import CommitsContainer from './components/CommitsContainer';

function App() {

  return (
    <>
      <Top></Top>
      <CommitsContainer></CommitsContainer>
    </>
  );
}

export default App;
