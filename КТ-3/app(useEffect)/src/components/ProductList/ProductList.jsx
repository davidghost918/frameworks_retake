import React from 'react';
import ProductItem from '../ProductItem/ProductItem';
import './ProductList.css';

function ProductList({ products, onRemoveProduct }) {
  return (
    <div className="product-list">
      {products.map((product) => (
        <ProductItem
          key={product.id}
          product={product}
          onRemoveProduct={onRemoveProduct}
        />
      ))}
    </div>
  );
}

export default ProductList;
