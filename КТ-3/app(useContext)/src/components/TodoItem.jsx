import React, { useContext } from 'react';
import { TodoContext } from '../context/TodoContext';

const TodoItem = ({ todo }) => {
  const { removeTodo, updateTodo } = useContext(TodoContext);

  const handleRemove = () => {
    removeTodo(todo.id);
  };

  const handleToggle = () => {
    updateTodo(todo.id, { ...todo, completed: !todo.completed });
  };

  return (
    <li>
      <span onClick={handleToggle} style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
        {todo.text}
      </span>
      <button onClick={handleRemove}>Удалить</button>
    </li>
  );
};

export default TodoItem;
