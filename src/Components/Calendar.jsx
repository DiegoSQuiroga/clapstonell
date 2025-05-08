import React, { useReducer } from 'react';
import BookTable from './BookTable';

// Simula los horarios disponibles para una fecha
const fetchAvailableTimes = (date) => {
  // Lógica real podría consultar un backend o API
  return ['18:00', '19:00', '20:00', '21:00'];
};

// Reducer que actualiza horarios según la fecha seleccionada
const timesReducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE':
      return fetchAvailableTimes(action.date);
    default:
      return state;
  }
};

const Calendar = () => {
  const [availableTimes, dispatch] = useReducer(timesReducer, [], () =>
    fetchAvailableTimes(new Date().toISOString().split('T')[0])
  );

  return (
    <main>
      <BookTable availableTimes={availableTimes} dispatch={dispatch} />
    </main>
  );
};

export default Calendar;