import React, { useState } from 'react';
import { FaUser, FaCalendarAlt, FaClock, FaUsers } from 'react-icons/fa';

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
      <form onSubmit={handleSubmit} className="form">
        <div className="input-group">
          <label htmlFor="name">Name</label>
          <div className="input-icon">
            <FaUser />
            <input type="text" id="name" name="name" placeholder="Your Name" onChange={handleChange} required />
          </div>
        </div>
        <div className="input-group">
          <label htmlFor="date">Date</label>
          <div className="input-icon">
            <FaCalendarAlt />
            <input type="date" id="date" name="date" onChange={handleChange} required />
          </div>
        </div>
        <div className="input-group">
          <label htmlFor="time">Time</label>
          <div className="input-icon">
            <FaClock />
            <input type="time" id="time" name="time" onChange={handleChange} required />
          </div>
        </div>
        <div className="input-group">
          <label htmlFor="guests">Guests</label>
          <div className="input-icon">
            <FaUsers />
            <input type="number" id="guests" name="guests" placeholder="Number of Guests" onChange={handleChange} required />
          </div>
        </div>
        <button type="submit">Reserve</button>
      </form>
    </section>
  );
};

export default BookTable;