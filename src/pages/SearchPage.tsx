import React from 'react';
import { Header } from '../components/Shared/Header/Index';
import { SearchBar } from '../components/SearchPage/SearchBar';
import { GlobalStyle } from "../styles/global";
import { SearchMenu } from '../components/SearchPage/SearchMenu';

const Search = () =>{
  return (
    <div>
      <GlobalStyle/>   
      <Header/> 
      <SearchBar/>
      <SearchMenu/>
      
    </div>
  );
}

export default Search;