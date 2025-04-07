import React from 'react';
import './HeroSection.css';

function HeroSection() {
  return (
    <section id="about" className="hero-section">
      <div className="hero-section__content">
        <h1>Веломастерская «Велозар»</h1>
        <p>
        Мы, мастера веломастерской «Велозар», как раз те самые счастливые люди, которые смогли превратить свое увлечение и хобби в профессию. Мы сами любим кататься и хотим чтобы Ваш двухколесный друг приносил Вам только радость и удовольствие от езды.
        </p>
      </div>
      <div className="hero-section__image">
        <img 
          src="/images/hero.png" 
          alt="Динозавр на велосипеде" 
        />
      </div>
    </section>
  );
}

export default HeroSection;
