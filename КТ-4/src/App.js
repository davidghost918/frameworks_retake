import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductsList from './components/ProductsList/ProductsList';
import ProductDetail from './components/ProductDetail/ProductDetail';
import NotFoundPage from './components/NotFoundPage/NotFoundPage';

const App = () => (
  <Router>
    <Routes>
      <Route path="/products" element={<ProductsList />} />
      <Route path="/product/:id" element={<ProductDetail />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  </Router>
);

export default App;
