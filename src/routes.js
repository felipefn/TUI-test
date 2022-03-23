import React from 'react'
import { Route, BrowserRouter, Routes } from 'react-router-dom'

import Home from './pages/HomePage'
import Search from './pages/SearchPage'

import HomePage from './pages/HomePage'
import SearchPage from './pages/SearchPage'
import DetailsPage from './pages/DetailsPage'

export const Rotas = () => {
  return (
    <Routes>
      <Route path="/" exact element={<HomePage />} />
      <Route path="search" exact element={<SearchPage />} />
      <Route path="details" exact element={<DetailsPage />} />
    </Routes>
  )
}
