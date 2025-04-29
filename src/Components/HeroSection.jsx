import React from 'react';

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero-text">
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <button>Reserve a Table</button>
      </div>
      <div className="hero-image">
        <img src="/hero-image.jpg" alt="Restaurant" />
      </div>
    </section>
  );
};

export default HeroSection;
