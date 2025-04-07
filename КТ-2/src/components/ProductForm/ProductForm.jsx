import React, { useState } from "react";

function ProductForm({ onAdd }) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !price.trim()) return;
    onAdd(name, price);
    setName("");
    setPrice("");
  };

  return (
    <form onSubmit={handleSubmit} className="product-form">
      <input
        type="text"
        placeholder="Имя продукта"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="number"
        placeholder="Стоимость"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <button type="submit">Добавить</button>
    </form>
  );
}

export default ProductForm;
