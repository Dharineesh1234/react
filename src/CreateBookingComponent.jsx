import React, { useState } from 'react';
import apiService from './servics/Api'; // Adjust the path as necessary
import './CreateBookingComponent.css';

const CreateBookingComponent = () => 
  {
    
  const [booking, setBooking] = useState({
    BookingId : '',
    userId: '',
    NumberOfStickers: '',
    
  });
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBooking({
      ...booking,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await apiService.createBooking(booking);
      setResponse(res.data);
      setError(null);
    } catch (err) 
    {
      setError(err.response ? err.response.data : 'Error creating booking');
      setResponse(null);
    }
  };

  return (
    <div>
      <h1>Create Booking</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            BookingId
            <input
              type="text"
              name="BookingId"
              value={booking.BookingId}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            User ID:
            <input
              type="text"
              name="userId"
              value={booking.userId}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            Number of Tickets
            <input
              type="number"
              name="NumberOfStickers"
              value={booking.NumberOfStickers}
              onChange={handleChange}
            />
          </label>
        </div>
        {/* Add other booking fields as needed */}
        <button type="submit">Create Booking</button>
      </form>
      {response && (
        <div>
          <h2>Booking Created Successfully</h2>
          <pre>{JSON.stringify(response, null, 2)}</pre>
        </div>
      )}
      {error && (
        <div>
          <h2>Error</h2>
          <p>{error}</p>
        </div>
      )}
    </div>
  );
};

export default CreateBookingComponent;
