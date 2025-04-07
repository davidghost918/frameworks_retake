import React, { useState, useEffect, useRef } from 'react';
import Header from './components/Header/Header';
import ProductList from './components/ProductList/ProductList';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
  const [products, setProducts] = useState([]);
  const footerRef = useRef(null);

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
      })
      .catch((error) => console.error(error));
  }, []);

  const handleScrollToFooter = () => {
    footerRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const handleRemoveProduct = (id) => {
    setProducts((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <div className="App">
      <Header onScrollToFooter={handleScrollToFooter} />
      <ProductList products={products} onRemoveProduct={handleRemoveProduct} />
      <Footer footerRef={footerRef} />
    </div>
  );
}

export default App;
