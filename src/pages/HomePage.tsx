import React from 'react';
import { Header } from '../components/Shared/Header/Index';
import { HotelCard } from '../components/HomePage/HotelCard';
import { SearchArea } from '../components/HomePage/SearchArea';
import { GlobalStyle } from "../styles/global";

const Home = () =>{
  return (
    <div>
      <GlobalStyle/>
      <Header/>
      <SearchArea/>
      <HotelCard/>
      
      
    </div>
  );
}

export default Home;