import React, { useState } from 'react';
import { FaUser, FaEnvelope, FaCalendarAlt, FaClock, FaUsers } from 'react-icons/fa';

const BookTable = ({ availableTimes, dispatch }) => {
  const [formData, setFormData] = useState({ name: '',email: '', date: '', time: '', guests: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (name === 'date') {
      dispatch({ type: 'UPDATE', date: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Booking confirmed for ${formData.name} ${formData.date} at ${formData.time}`);
  };

  return (
    <section className="book-table" id="book-table">
      <form onSubmit={handleSubmit} className="form" aria-labelledby="form-title">
      <h2 id="form-title">Book a Table</h2>
        <div className="input-group">
          <label htmlFor="name">Name</label>
          <div className="input-icon">
            <FaUser aria-hidden="true" />
            <input type="text" id="name" name="name" placeholder="Your Name" onChange={handleChange} required aria-required="true" />
          </div>
        </div>
        <div className="input-group">
          <label htmlFor="email">Email</label>
          <div className="input-icon">
            <FaEnvelope aria-hidden="true" />
            <input type="email" id="email" name="email" placeholder="Your Email" onChange={handleChange} required aria-required="true"
        aria-describedby="email-desc" />
          </div>
          <small id="email-desc"></small>
        </div>
        <div className="input-group">
          <label htmlFor="date">Date</label>
          <div className="input-icon">
            <FaCalendarAlt aria-hidden="true"/>
            <input type="date" id="date" name="date" onChange={handleChange} required aria-required="true"/>
          </div>
        </div>
        <div className="input-group">
          <label htmlFor="time">Time</label>
          <div className="input-icon">
            <FaClock aria-hidden="true"/>
            <select id="time" name="time" onChange={handleChange} required aria-required="true">
              <option value="">Select a time</option>
              {availableTimes.map((time) => (
              <option key={time} value={time}>{time}</option>
              ))}
            </select>
          </div>
        </div>
        <div className="input-group">
          <label htmlFor="guests">Guests</label>
          <div className="input-icon">
            <FaUsers aria-hidden="true"/>
            <select id="guests" name="guests" onChange={handleChange} required aria-required="true" min="1">
              <option value="">Select guests</option>
              <option value="1">1 Guest</option>
              <option value="2">2 Guests</option>
              <option value="3">3 Guests</option>
              <option value="4">4 Guests</option>
              <option value="5">5 Guests</option>
              <option value="6">6 Guests</option>
            </select>
          </div>
        </div>
        <button type="submit" aria-label="Reserve a table">Reserve</button>
      </form>
    </section>
  );
};

export default BookTable;