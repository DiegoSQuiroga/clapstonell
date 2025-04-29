import React from 'react';
import SpecialsCard from './SpecialsCard';

const Specials = () => {
  const dishes = [
    { title: 'Greek Salad', price: '$12.99', description: 'Fresh vegetables, feta cheese...', image: '/greek-salad.jpg' },
    { title: 'Bruschetta', price: '$5.99', description: 'Grilled bread with tomatoes...', image: '/bruschetta.jpg' },
    { title: 'Lemon Dessert', price: '$4.99', description: 'Sweet lemon dessert...', image: '/lemon-dessert.jpg' },
  ];

  return (
    <section className="specials">
      <div className="specials-header">
        <h2>Specials</h2>
        <button>Online Menu</button>
      </div>
      <div className="specials-grid">
        {dishes.map((dish, index) => (
          <SpecialsCard key={index} {...dish} />
        ))}
      </div>
    </section>
  );
};

export default Specials;
