import { useState } from 'react';
import { FaUser, FaEnvelope, FaCalendarAlt, FaClock, FaUsers } from 'react-icons/fa';

const BookingForm = ({ availableTimes, selectedDate, setSelectedDate, onReservation}) => {
  const [formData, setFormData] = useState({ name: '',email: '', date: selectedDate.toISOString().split('T')[0], time: '', guests: 1 });
  const [errors, setErrors]= useState({});

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: name === 'guests' ? Number(value) : value }));/*todo esto en vez de [name]:value porque stengo que validar si es un numero en vez de un string cuando name es guests*/

    if (name === 'email') {
      setErrors(prev => ({ ...prev, email: validateEmail(value) ? null : 'Wrong format'}));
    }

    if (name === 'date') {
      setSelectedDate(new Date(value)); // actualiza la fecha en el padre
      setFormData((prev) => ({ ...prev, time: '' })); // limpia el tiempo al cambiar fecha
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'required name';
    if (!formData.email) {
      newErrors.email = 'required email'
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'invalid email';
    }
    if (!formData.date) newErrors.date = 'required date';
    if (!formData.time) newErrors.time = 'required time';
    if (formData.guests < 1 || formData.guests > 6) {
    newErrors.guests = '1 till 6, more than six please call reservations';
    };

    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      onReservation(formData);
      setFormData({ name: '', email: '', date: '', time: '', guests: 1 });
    };
  };

  return (
    <form onSubmit={handleSubmit} id="reservation">

      {/* Name*/}
      <div className="bookatable">Reservations</div>
      <div className="input-group">
        <label htmlFor="res-name">Full Name</label>
        <div>
          <FaUser />
          <input
            type="text"
            name="name"
            id="res-name"
            value={formData.name}
            onChange={handleChange}
            aria-invalid={!!errors.name}
          />
          {errors.name && <span className="error">{errors.name}</span>}
        </div>
      </div>

      {/* Email */}
      <div className="input-group">
        <label htmlFor="res-email">Email</label>
        <div>
          <FaEnvelope />
          <input
            type="email"
            name="email"
            id='res-email'
            value={formData.email}
            onChange={handleChange}
            aria-invalid={!!errors.email}
          />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>
      </div>

      {/* date */}
      <div className="input-group">
        <label htmlFor="res-date">Date</label>
        <div>
          <FaCalendarAlt />
          <input
            type="date"
            name="date"
            id='res-date'
            value={formData.date}
            onChange={handleChange}
            min={new Date().toISOString().split('T')[0]}
            aria-invalid={!!errors.date}
          />
          {errors.date && <span className="error">{errors.date}</span>}
        </div>
      </div>

      {/* time (only available with selected date) */}
      <div className="input-group">
        <label htmlFor="time">Time</label>
        <div>
          <FaClock />
          <select
            name="time"
            id="time"
            value={formData.time}
            onChange={handleChange}
            disabled={!formData.date}
            aria-invalid={!!errors.time}
          >
            <option value="">Select time</option>
            {availableTimes.map(time => (
              <option key={time} value={time}>{time}</option>
            ))}
          </select>
          {errors.time && <span className="error">{errors.time}</span>}
        </div>
      </div>
      {/* Guests */}
      <div className="input-group">
        <label htmlFor="guests">Number of guest</label>
        <div>
          <FaUsers />
          <input
            type="number"
            name="guests"
            id="guests"
            min="1"
            max="6"
            value={formData.guests}
            onChange={handleChange}
            aria-invalid={!!errors.guests}
          />
          {errors.guests && <span className="error">{errors.guests}</span>}
        </div>
      </div>

      <button type="submit">Make your reservation</button>
    </form>
  );
};

export default BookingForm;