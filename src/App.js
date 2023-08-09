import React from 'react';
import MainRoutes from './MainRoutes';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
      <Navbar />
      <MainRoutes />
      <Footer />
    </>
  )
}

export default App