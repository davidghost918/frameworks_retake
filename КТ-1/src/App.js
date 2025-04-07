import React from 'react';
import Header from './components/Header/Header';
import HeroSection from './components/HeroSection/HeroSection';
import OfferSection from './components/OfferSection/OfferSection';
import HistorySection from './components/HistorySection/HistorySection';
import ServicesSection from './components/ServiceSection/ServiceSection';
import RentalSection from './components/RentalSection/RentalSection';

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <OfferSection />
      <HistorySection />
      <ServicesSection />
      <RentalSection />
    </div>
  );
}

export default App;
