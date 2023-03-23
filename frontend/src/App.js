import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Top from './components/Top';
import CommitsContainer from './components/CommitsContainer';
import AppContextProvider from './context/AppContext';

function App() {

  return (
    <AppContextProvider>
      <Top/>
      <CommitsContainer/>
    </AppContextProvider>
  );
}

export default App;
