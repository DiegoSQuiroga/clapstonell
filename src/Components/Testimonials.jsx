import React from 'react';
import TestimonialsCard from './TestimonialsCard';

const Testimonials = () => {
  const testimonials = [
    { name: 'John', rating: 5, comment: 'Amazing food!' },
    { name: 'Lisa', rating: 4, comment: 'Loved the ambiance.' },
    { name: 'Mike', rating: 5, comment: 'Great service!' },
  ];

  return (
    <section className="testimonials">
      <h2>Testimonials</h2>
      <div className="testimonials-grid">
        {testimonials.map((t, index) => (
          <TestimonialsCard key={index} {...t} />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;