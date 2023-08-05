import {useState} from "react"; 
import React from "react";
import restaurant2 from '../img/restaurant.jpg';
// import { availableTimesReducer, initializeTimes, updateTimes } from "./Booking";

export default function BookingForm({ availableTimes, dispatchAvailableTimes }){
    const [date, setDate] = useState(""); 
    const [time, setTime] = useState("17:00"); 
    const [numberOfGuests, setNumberOfGuests] = useState(1);
    const [occasion, setOccasion] = useState("Birthday");
    const expectedTimes = [
        "17:00",
        "18:00",
        "19:00",
        "20:00",
        "21:00",
        "22:00",
      ];
    // State variable for available booking times

    // State variable for Date Change
    const handleDateChange = (event) => {
        const selectedDateValue = event.target.value;
        // Dispatch the action to update availableTimes state based on selected date
        dispatchAvailableTimes({ type: "UPDATE_TIMES", payload: selectedDateValue });
        setDate(selectedDateValue); // Set the date state
    };
    // Handler for form submission
    const handleSubmit = (event) => {
        event.preventDefault();
        // Add your logic here to handle the form submission
        // For example, you can make an API call to save the reservation details
        // and perform any other necessary actions.
        setDate("");
        setTime("");
        setNumberOfGuests(1);
        setOccasion("Birthday");
        // Console log a message
        alert("Reservation submitted successfully!");
        console.log(date);
        console.log(time);
        console.log(numberOfGuests);
        console.log(occasion);
        console.log(availableTimes);
    };
    if(numberOfGuests<1 && numberOfGuests>10)
        return 
    return(
        <div className="reservation">
            <img src={restaurant2} alt="" />
            <form onSubmit={handleSubmit}>
                <label htmlFor="res-date">Choose date</label>
                <input type="date" id="res-date"
                    value={date}
                    onChange={handleDateChange}
                    aria-labelledby="res-date"
                    required
                />

                <label htmlFor="res-time">Choose time</label>
                <select id="res-time" value={time} onChange={(e) => setTime(e.target.value)}>
                    {/* Rendering availableTimes if it exists */}
                    {availableTimes.length > 0 ? 
                    (
                            availableTimes.map((time) => (
                                <option key={time} value={time}>
                                {time}
                                </option>
                            ))
                    ) 
                    : 
                    (
                        // Rendering expectedTimes if availableTimes is empty
                        expectedTimes.map((time) => (
                            <option key={time} value={time}>
                            {time}
                            </option>
                        ))
                    )}
                </select>

                <label htmlFor="guests">Number of guests</label>
                <input type="number" 
                    placeholder="1" 
                    min="1" max="10" 
                    id="guests"
                    value={numberOfGuests}
                    onChange={(e) => setNumberOfGuests(e.target.value) }
                    required
                />

                <label htmlFor="occasion">Occasion</label>
                <select id="occasion"
                    value={occasion}
                    onChange={(e) => setOccasion(e.target.value)}
                    required
                >
                    <option>Birthday</option>
                    <option>Anniversary</option>
                </select>

                <input type="submit" value="Make Your reservation" />
            </form>
        </div>
        

    )
}