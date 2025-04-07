import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="header__logo">
        <img 
          src="/images/logo.svg" 
          alt="Логотип Велозар" 
          className="header__logo-image"
        />
      </div>
      <nav className="header__nav">
        <a href="#offer">О нас</a>
        <a href="#services">Услуги</a>
        <a href="#rent">Аренда</a>
      </nav>
      <a className="header__button" href="#contacts">Связаться</a>
    </header>
  );
}

export default Header;
