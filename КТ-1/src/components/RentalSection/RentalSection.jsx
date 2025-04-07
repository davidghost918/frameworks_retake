import React from 'react';
import './RentalSection.css';

function RentalSection() {
  return (
    <section id="rent" className="rental-section">
      <div className="rental-section__image">
        <img 
          src="/images/rental.png" 
          alt="Прокат велосипедов" 
        />
      </div>
      <div className="rental-section__text">
        <h2>Прокат велосипедов</h2>
        <p className="rental-section__description">
          У нас вы можете взять на прокат хорошо обслуженные и настроенные велосипеды. Как раз мы находимся в прекрасном парке!
        </p>
      </div>
    </section>
  );
}

export default RentalSection;
