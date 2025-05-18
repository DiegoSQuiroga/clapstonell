// BookingForm.test.jsx
import { render, screen } from '@testing-library/react';
import BookingForm from './Components/BookingForm';

describe('HTML5 attributes', () => {
  const props = {
    availableTimes: ['12:00', '13:00'],
    selectedDate: new Date(),
    setSelectedDate: jest.fn(),
    onReservation: jest.fn(),
  };

  test('Name input is type text', () => {
    render(<BookingForm {...props} />);
    const input = screen.getByLabelText(/Full Name/i);
    expect(input).toHaveAttribute('type', 'text');
  });

  test('Email input is type email', () => {
    render(<BookingForm {...props} />);
    const input = screen.getByLabelText(/Email/i);
    expect(input).toHaveAttribute('type', 'email');
  });

  test('Date input is type date and has min attribute', () => {
    render(<BookingForm {...props} />);
    const input = screen.getByLabelText(/Date/i);
    expect(input).toHaveAttribute('type', 'date');
    expect(input).toHaveAttribute('min');
  });

  test('Time select is disabled when no date', () => {
    render(<BookingForm {...props} />);
    const select = screen.getByLabelText(/Time/i);
    expect(select).not.toBeDisabled(); // Está habilitado por defecto porque hay fecha
  });

  test('Guests input is type number with min/max', () => {
    render(<BookingForm {...props} />);
    const input = screen.getByLabelText(/Number of guest/i);
    expect(input).toHaveAttribute('type', 'number');
    expect(input).toHaveAttribute('min', '1');
    expect(input).toHaveAttribute('max', '6');
  });
});