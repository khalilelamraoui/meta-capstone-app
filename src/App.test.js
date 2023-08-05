import { fireEvent, render, screen } from "@testing-library/react";
import BookingForm from './components/BookingForm';
import { initializeTimes } from './components/Booking';
import { updateTimes } from './components/Booking';
import { MemoryRouter } from 'react-router-dom';
import Booking from './components/Booking';

test('Renders the BookingForm heading', () => {
    render(<BookingForm />);
    const headingElement = screen.getByText("Book Now");
    expect(headingElement).toBeInTheDocument();
})

test('updateTimes returns the same state value', () => {
  // Current state value
  const currentState = [
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00",
  ];

  // Selected date (it doesn't matter for this initial test)
  const selectedDate = "2023-07-30";

  // Call the updateTimes function
  const updatedTimes = updateTimes(currentState, selectedDate);

  // Compare the result with the current state value
  expect(updatedTimes).toEqual(currentState);
});

test('initializeTimes returns the correct initial times', () => {
  // Call the initializeTimes function
  const initialTimes = initializeTimes();

  // Define the expected initial times
  const expectedTimes = [
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00",
  ];

  // Compare the result with the expected value
  expect(initialTimes).toEqual(expectedTimes);
});

describe('Booking page', () => {
  const timeFormat = /^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/;

  test('should have one or more available booking time options', async () => {
    render(
      <MemoryRouter>
        <Booking />
      </MemoryRouter>
    );

    const timeOptions = await screen.findAllByTestId('booking-time-option');

    expect(timeOptions.length).toBeGreaterThanOrEqual(1);
    timeOptions.forEach(timeOption => 
      expect(timeOption.value).toMatch(timeFormat)
    );
  });

  test('should update available booking time options when changing booking date', async() => {
    render(
      <MemoryRouter>
        <Booking />
      </MemoryRouter>
    );

    const bookingDate = '2023-04-01';
    const dateInput = screen.getByLabelText(/Date/);
    const initialTimeOptions = await screen.findAllByTestId('booking-time-option');
    fireEvent.change(dateInput, { target: { value: bookingDate } });
    fireEvent.blur(dateInput);
    const updatedTimeOptions = await screen.findAllByTestId('booking-time-option');

    expect(dateInput).toHaveValue(bookingDate);
    initialTimeOptions.forEach(timeOption => 
      expect(timeOption.value).toMatch(timeFormat)
    );
    updatedTimeOptions.forEach(timeOption => 
      expect(timeOption.value).toMatch(timeFormat)
    );
    expect(initialTimeOptions.length).not.toBe(updatedTimeOptions.length);
  });

  //test('', () => {});
});