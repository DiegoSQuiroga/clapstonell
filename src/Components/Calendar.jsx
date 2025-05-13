import { useReducer } from 'react';
import BookingForm from './BookingForm';
import BookingSlot from './BookingSlot';

// funcion para inicializar horarios
const initializeTimes = () => {
  return['19:00','20:00','21:00','22:00'];
};

// Reducer que actualiza horarios según la fecha seleccionada
const updateTimes = (state, action) => {
  switch (action.type) {
    case 'UPDATE':
      // Por ahora devuelve los mismos horarios (luego conectaremos a API)
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
    alert(`reserva confirmada el dia ${reservationData.date} a las ${reservationData.time}`);
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