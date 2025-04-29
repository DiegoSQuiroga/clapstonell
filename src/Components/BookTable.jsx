import React, { useState } from 'react';

const BookTable = () => {
  const [formData, setFormData] = useState({ name: '', date: '', time: '', guests: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Booking confirmed for ${formData.name}`);
  };

  return (
    <section className="book-table">
      <h2>Book a Table</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Your Name" onChange={handleChange} required />
        <input type="date" name="date" onChange={handleChange} required />
        <input type="time" name="time" onChange={handleChange} required />
        <input type="number" name="guests" placeholder="Number of Guests" onChange={handleChange} required />
        <button type="submit">Reserve</button>
      </form>
    </section>
  );
};

export default BookTable;
