import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import Rating from '../Rating/Rating';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Ошибка загрузки товара:', err);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <div>Загрузка...</div>;
  if (!product) return <div>Товар не найден</div>;

  return (
    <div>
      <Link to="/products">← Вернуться к списку товаров</Link>
      <h1>{product.title}</h1>
      <p>{product.description}</p>
      <Rating rating={product.rating.rate} />
      <p>Цена: ${product.price}</p>
    </div>
  );
};

export default ProductDetail;
