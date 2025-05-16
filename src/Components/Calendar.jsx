import { useReducer } from 'react';
import BookingForm from './BookingForm';
import BookingSlot from './BookingSlot';

// Sample initial times
const initializeTimes = () => {
  return ['19:00', '20:00', '21:00', '22:00'];
};


const updateTimes = (state, action) => {
  switch (action.type) {
    case 'UPDATE':
      return initializeTimes();
    case 'REMOVE_TIME':
      return state.filter(time => time !== action.payload);
    default:
      return state;
  }
};

const Calendar = () => {
  const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);
  const handleReservation = (reservationData) => {
    console.log('reserva recibida', reservationData);
    dispatch({type: 'REMOVE_TIME', payload: reservationData.time});
    alert(`Reservation confirmed ${reservationData.date} at ${reservationData.time}`);
  };

  return (
    <div className='Calendar'>
      <BookingForm
        availableTimes={availableTimes}
        dispatch={dispatch}
        onReservation={handleReservation}
      />
      <BookingSlot
        availableTimes={availableTimes}
      />
    </div>
  );
};


export default Calendar;