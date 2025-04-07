import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => (
  <div>
    <h2>404 - Страница не найдена</h2>
    <Link to="/products">
      <button>Перейти к товарам</button>
    </Link>
  </div>
);

export default NotFoundPage;
