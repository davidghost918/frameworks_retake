import React from "react";
import ProductCard from "../ProductCard/ProductCard";

function ProductList({ products, onIncrement, onDecrement, onRemoveDblClick }) {
  return (
    <div className="product-list">
      {products.map((item) => (
        <ProductCard
          key={item.id}
          product={item}
          onIncrement={onIncrement}
          onDecrement={onDecrement}
          onRemoveDblClick={onRemoveDblClick}
        />
      ))}
    </div>
  );
}

export default ProductList;
