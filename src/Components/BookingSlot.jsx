const BookingSlot = ({ availableTimes }) => {
  return (
    <div className="booking-slots">
      <h3>available time</h3>
      {availableTimes.length === 0 ? (
        <p>No available times</p>
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