import React from 'react';
import './ServiceSection.css';

function ServicesSection() {
  return (
    <section className="services-section" id="services">
      <div className="services-section__container">
        <div className="services-section__card dark">
          <hr/>
          <h3>Годовое ТО</h3>
        </div>
        <div className="services-section__card blue">
          <hr/>
          <h3>Выравнивание колес</h3>
        </div>
        <div className="services-section__card green">
          <hr/>
          <h3>Настройка переключателей</h3>
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;
