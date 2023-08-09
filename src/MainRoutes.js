import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AboutPage from './components/AboutPage';
import HomePage from './components/HomePage';
import UsersPage from './components/UsersPage';

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/about" element={<AboutPage />} />
      <Route path="/" element={<HomePage />} />
      <Route path="/users" element={<UsersPage />} />
    </Routes>
  )
}


export default MainRoutes