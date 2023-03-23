import './App.css';
import React from 'react';
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
