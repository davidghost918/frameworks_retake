import React, { useState, useContext } from 'react';
import TodoList from './components/TodoList';
import { TodoContext } from './context/TodoContext';

const App = () => {
  const { addTodo } = useContext(TodoContext);
  const [inputValue, setInputValue] = useState('');

  const handleAddTodo = () => {
    if (inputValue.trim()) {
      addTodo({ id: Date.now(), text: inputValue, completed: false });
      setInputValue('');
    }
  };

  return (
    <div>
      <h1>Todo App</h1>
      <input 
        type="text" 
        value={inputValue}
        onChange={e => setInputValue(e.target.value)}
      />
      <button onClick={handleAddTodo}>Добавить задачу</button>
      <TodoList />
    </div>
  );
};

export default App;
