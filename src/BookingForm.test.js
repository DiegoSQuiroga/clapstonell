import { render, screen } from "@testing-library/react";
import BookingForm from './Components/BookingForm';

test('Renders the BookingForm reservation button', () => {
    render(
        <BookingForm
            availableTimes={["18:00", "19:00"]}
            selectedDate={new Date()}
            setSelectedDate={() => {}}
            onReservation={() => {}}
        />
    );
    const headingElement = screen.getByText("Make your reservation");
    expect(headingElement).toBeInTheDocument();
});