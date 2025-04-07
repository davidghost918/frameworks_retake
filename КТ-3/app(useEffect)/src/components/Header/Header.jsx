import React from 'react';

function Header({ onScrollToFooter }) {
  return (
    <header className="header">
      <h1>Магазин</h1>
      <button onClick={onScrollToFooter}>Прокрутить к футеру</button>
    </header>
  );
}

export default Header;
