import { render, screen } from "@testing-library/react";
import BookingForm from './BookingForm';

test('Renders the BookingForm reservation button', () => {
    render(<BookingForm />);
    const headingElement = screen.getByText("Make a reservation");
    expect(headingElement).toBeInTheDocument();
});
