import React from 'react';
import Stars from '../Stars/Stars';

function ProductItem({ product, onRemoveProduct }) {
  const handleDoubleClick = () => {
    onRemoveProduct(product.id);
  };

  return (
    <div className="product-item" onDoubleClick={handleDoubleClick}>
      <img
        src={product.thumbnail}
        alt={product.title}
        style={{ width: '350px', height: '250px', objectFit: 'cover' }}
      />
      <h3>{product.title}</h3>
      <p>Price: ${product.price}</p>
      <Stars rating={product.rating} />
    </div>
  );
}

export default ProductItem;
