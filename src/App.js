import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import AllProducts from './pages/AllProducts';
import ProductDetail from './pages/ProductDetail';
import ProductsList from './components/ProductsList';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<AllProducts />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/productlist" element={<ProductsList />} />
      </Routes>
    </Router>
  );
};

export default App;
