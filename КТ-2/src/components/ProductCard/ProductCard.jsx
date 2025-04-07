import React from "react";

function ProductCard({ product, onIncrement, onDecrement, onRemoveDblClick }) {
  const { id, name, price, count } = product;

  const handleDoubleClick = () => {
    onRemoveDblClick(id);
  };

  return (
    <div className="product-card" onDoubleClick={handleDoubleClick}>
      <h2>{name}</h2>
      <p>Price: {price}</p>
      <div className="count-controls">
        <button onClick={() => onDecrement(id)}>-</button>
        <span>{count}</span>
        <button onClick={() => onIncrement(id)}>+</button>
      </div>
    </div>
  );
}

export default ProductCard;
