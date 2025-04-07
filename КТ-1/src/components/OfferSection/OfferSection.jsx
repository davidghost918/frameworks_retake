import React from 'react';
import './OfferSection.css';

function OfferSection() {
  return (
    <section id="offer" className="offer-section">
      <div className="offer-section__wrapper">
        <div className="offer-section__text">
        <h2>Что мы предлагаем</h2>
          <p>
          В нашей мастерской можно выполнить комплексное техническое обслуживание велосипеда, ремонт и настройку всех его узлов, шиномонтажные работы. Вовремя проведенное ТО велосипеда помогает избежать многих проблем и дорогого ремонта.  Все работы выполняем качественно и с душой. 
          </p>
        </div>
        <div className="offer-section__image">
          <img 
            src="/images/offer.png" 
            alt="Велосипед в мастерской"
          /> 
        </div>
      </div>
    </section>
  );
}

export default OfferSection;
