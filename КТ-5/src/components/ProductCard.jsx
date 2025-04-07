import React from 'react';
import { useDispatch } from 'react-redux';
import { increment, decrement } from '../features/cartSlice';

const ProductCard = ({ id, title, count }) => {
  const dispatch = useDispatch();

  return (
    <div className="card">
      <h3>{title}</h3>
      <div className="buttons">
        <button onClick={() => dispatch(decrement(id))}>-</button>
        <span>{count}</span>
        <button onClick={() => dispatch(increment(id))}>+</button>
      </div>
    </div>
  );
};

export default ProductCard;
