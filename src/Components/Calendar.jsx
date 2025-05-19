import { useReducer, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import BookingForm from './BookingForm';
import BookingSlot from './BookingSlot';
import { fetchAPI, submitAPI } from './api.js';

export const initializeTimes = () => {
  return [];
};


export const updateTimes = (state, action) => {
  switch (action.type) {
    case 'SET_TIMES':
      return action.payload;
    case 'REMOVE_TIME':
      return state.filter(time => time !== action.payload);
    default:
      return state;
  }
};


const Calendar = () => {
  const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const navigate = useNavigate();

  useEffect(() => {
    fetchAPI(selectedDate).then((times) => {
      dispatch({ type: 'SET_TIMES', payload: times });
    });
  }, [selectedDate]);

  const handleReservation = async (reservationData) => {
  const success = await submitAPI(reservationData);
  if (success) {
    //lee reservas previas (o iniciar array vacío si no hay)
    const previousReservations = JSON.parse(localStorage.getItem('reservations')) || [];

    //agrega la nueva reserva
    const updatedReservations = [...previousReservations, reservationData];

    //guarda en localStorage
    localStorage.setItem('reservations', JSON.stringify(updatedReservations));

    //actualiza estado y redirecciona
    dispatch({ type: 'REMOVE_TIME', payload: reservationData.time });
    navigate('/confirmed');
  } else {
    alert('Failed to submit reservation.');
  }
  };

return (
    <div className='Calendar'>
      <BookingForm
        availableTimes={availableTimes}
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
        onReservation={handleReservation}
      />
      <BookingSlot availableTimes={availableTimes} />
    </div>
  );
};

export default Calendar;