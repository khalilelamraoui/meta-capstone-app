import BookingForm from "./BookingForm.jsx";
// import {useState} from "react";
import React, { useReducer } from "react";
// import { availableTimesReducer, initializeTimes, updateTimes } from "./reducers";
import { fetchAPI, submitAPI} from '../js/api.js';
import { useNavigate } from 'react-router-dom';
import pages from '../js/pages.js';
export default function Booking(){
    const updateTimes = async (selectedDate) => {
        try {
          // Call the API function to fetch available times for the selected date
          const availableTimes = await fetchAPI(selectedDate);
      
          return availableTimes;
        } catch (error) {
          console.error("Error fetching available times:", error);
          return []; // Return an empty array if there's an error or no available times
        }
    };
    const availableTimesReducer = (state, action) => {
        switch (action.type) {
          case "UPDATE_TIMES":
            return updateTimes(state, action.payload); // Call the updateTimes function with state and selectedDate
          default:
            return state;
        }
      };

    const initializeTimes = async () => {
        try {
          const today = new Date(); // Create a Date object for today
          const formattedDate = today.toISOString().slice(0, 10); // Convert to YYYY-MM-DD format
          // Extracting parts of the date
          const year = formattedDate.slice(0, 4);
          const month = formattedDate.slice(5, 7);
          const day = formattedDate.slice(8);

          // Rearranging the date in DD-MM-YYYY format
          const convertedDate = `${day}-${month}-${year}`;


          // Call the API function to fetch available times for today's date
          const availableTimes = await fetchAPI(convertedDate);
      
          return availableTimes;
        } catch (error) {
          console.log("Error fetching available times:", error);
          return []; // Return an empty array if there's an error or no available times
        }
    };
    const navigate = useNavigate();
    const submitData = formData => {
        const response = submitAPI(formData);
        if (response) navigate(pages.get('confirmed-booking').path);
      }; 


      


    const initialAvailableTimes = initializeTimes();

    const [availableTimes, dispatchAvailableTimes] = useReducer(
        availableTimesReducer,
        initialAvailableTimes
    );

    return(
        <BookingForm 
            availableTimes={availableTimes}
            dispatchAvailableTimes={dispatchAvailableTimes}
            submitData={submitData}
        />
    )
}