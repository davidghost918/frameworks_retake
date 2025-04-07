import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addItem } from './features/cartSlice';
import ProductCard from './components/ProductCard';

function App() {
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();
  const [input, setInput] = useState('');

  const handleAdd = () => {
    if (input.trim()) {
      dispatch(addItem(input));
      setInput('');
    }
  };

  return (
    <div className="app">
      <div className="input-container">
        <input 
          placeholder="Имя нового продукта....."
          value={input}
          onChange={e => setInput(e.target.value)}
        />
        <button onClick={handleAdd}>Добавить</button>
      </div>
      <div className="grid">
        {cart.map(item => (
          <ProductCard key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
}

export default App;
