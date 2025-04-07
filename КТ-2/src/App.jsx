import React, { useState } from "react";
import ProductList from "./components/ProductList/ProductList";
import ProductForm from "./components/ProductForm/ProductForm";
import "./App.css";

const initialData = [
  { id: 1, name: "Велосипед", price: 1000, count: 1 },
  { id: 2, name: "Самокат", price: 700, count: 1 },
  { id: 3, name: "Ролики", price: 1300, count: 2 },
  { id: 4, name: "Сноуборд", price: 19000, count: 4 },
];

function App() {
  const [products, setProducts] = useState(initialData);

  const handleAddProduct = (newName, newPrice) => {
    const newProduct = {
      id: Date.now(),
      name: newName,
      price: Number(newPrice),
      count: 1,
    };
    setProducts((prev) => [...prev, newProduct]);
  };

  const handleIncrement = (id) => {
    setProducts((prev) =>
      prev.map((product) =>
        product.id === id
          ? {
              ...product,
              count: product.count < 25 ? product.count + 1 : product.count,
            }
          : product
      )
    );
  };

  const handleDecrement = (id) => {
    setProducts((prev) =>
      prev
        .map((product) =>
          product.id === id
            ? { ...product, count: product.count - 1 }
            : product
        )

        .filter((product) => product.count !== 0)
    );
  };

  const handleRemoveByDoubleClick = (id) => {
    setProducts((prev) => prev.filter((product) => product.id !== id));
  };

  return (
    <div className="app-container">
      <ProductForm onAdd={handleAddProduct} />

      <ProductList
        products={products}
        onIncrement={handleIncrement}
        onDecrement={handleDecrement}
        onRemoveDblClick={handleRemoveByDoubleClick}
      />
    </div>
  );
}

export default App;
