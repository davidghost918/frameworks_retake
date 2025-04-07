import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Rating from '../Rating/Rating';

const ProductsList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error('Ошибка загрузки продуктов:', err));
  }, []);

  return (
    <div>
      <h1>Список товаров</h1>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
          gap: '20px'
        }}
      >
        {products.map((product) => (
          <div
            key={product.id}
            style={{
              border: '1px solid #ccc',
              padding: '10px',
              borderRadius: '4px'
            }}
          >
            <Link to={`/product/${product.id}`} style={{ textDecoration: 'none', color: 'black' }}>
              <h3>{product.title}</h3>
            </Link>
            <Rating rating={product.rating.rate} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsList;
