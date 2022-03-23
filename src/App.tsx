import React from 'react';
import { BrowserRouter, BrowserRouter as Router, Route } from 'react-router-dom';
import  {Rotas}  from "./routes";

import { GlobalStyle } from "./styles/global";
import HomePage from './pages/HomePage';
import SearchPage from './pages/SearchPage';


function App() {
  return (
    
      <div className="App">    
        <GlobalStyle/>
        <Rotas/>       
        
      </div>
    
  );
}

export default App;
