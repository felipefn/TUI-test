import React from 'react';
import { Header } from '../components/Shared/Header/Index';
import { GlobalStyle } from "../styles/global";
import { SearchBarW } from '../components/DetailsPage/SearchBarW';
import { HotelDetails } from '../components/DetailsPage/HotelDetails';

const Details = () =>{
  return (
    <div>
      <GlobalStyle/>
      <Header/>
      <SearchBarW/>
      <HotelDetails/>
      
      
      
    </div>
  );
}

export default Details;