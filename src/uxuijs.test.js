// BookingFormValidation.test.jsx
import { render, screen, fireEvent } from '@testing-library/react';
import BookingForm from './Components/BookingForm';

describe('JavaScript validation', () => {
  const props = {
    availableTimes: ['12:00', '13:00'],
    selectedDate: new Date(),
    setSelectedDate: jest.fn(),
    onReservation: jest.fn(),
  };

  test('Email is invalid (shows error)', () => {
    render(<BookingForm {...props} />);
    const input = screen.getByLabelText(/Email/i);
    fireEvent.change(input, { target: { name: 'email', value: 'invalid-email' } });
    fireEvent.blur(input); // Simula perder foco
    const error = screen.getByText(/Wrong format/i);
    expect(error).toBeInTheDocument();
  });

  test('Email is valid (no error)', () => {
    render(<BookingForm {...props} />);
    const input = screen.getByLabelText(/Email/i);
    fireEvent.change(input, { target: { name: 'email', value: 'test@example.com' } });
    const error = screen.queryByText(/Wrong format/i);
    expect(error).toBeNull();
  });

  test('Submitting empty form shows required errors', () => {
    render(<BookingForm {...props} />);
    const submit = screen.getByRole('button', { name: /Make your reservation/i });
    fireEvent.click(submit);

    expect(screen.getByText(/required name/i)).toBeInTheDocument();
    expect(screen.getByText(/required email/i)).toBeInTheDocument();
    expect(screen.getByText(/required time/i)).toBeInTheDocument();
  });

  test('Submitting with too many guests shows error', () => {
    render(<BookingForm {...props} />);
    const guestsInput = screen.getByLabelText(/Number of guest/i);
    fireEvent.change(guestsInput, { target: { name: 'guests', value: '8' } });
    const submit = screen.getByRole('button');
    fireEvent.click(submit);
    expect(screen.getByText(/1 till 6/i)).toBeInTheDocument();
  });
});