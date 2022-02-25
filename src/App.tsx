import React from 'react';
import { Header } from './components/Header/Index';
import { HotelCard } from './components/HotelCard';
import { SearchArea } from './components/SearchArea';


import { GlobalStyle } from "./styles/global";


function App() {
  return (
    <div className="App">
      <GlobalStyle/>
      <Header/>
      <SearchArea/>
      <HotelCard/>
      
    </div>
  );
}

export default App;
