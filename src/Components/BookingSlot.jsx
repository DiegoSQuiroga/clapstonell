const BookingSlot = ({ availableTimes }) => {
  return (
    <div className="booking-slots">
      <h3>Horarios Disponibles</h3>
      {availableTimes.length === 0 ? (
        <p>No hay horarios disponibles</p>
      ) : (
        <ul>
          {availableTimes.map((time, index) => (
            <li key={index}>{time}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default BookingSlot;