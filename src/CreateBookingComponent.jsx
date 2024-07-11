import React, { useState } from 'react';
import apiService from './servics/Api'; // Adjust the path as necessary
import movieImage from './assets/Images/movie1.jpg'; // Adjust path as necessary

const CreateBookingComponent = () => {
  const [booking, setBooking] = useState({
    BookingId: '',
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
    } catch (err) {
      setError(err.response ? err.response.data : 'Error creating booking');
      setResponse(null);
    }
  };

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundImage: `url(${movieImage})`,
    backgroundSize: 'cover',
    color: '#fff',
    padding: '20px',
  };

  const formStyle = {
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
    width: '300px',
  };

  const inputStyle = {
    width: '100%',
    padding: '10px',
    margin: '10px 0',
    borderRadius: '5px',
    border: '1px solid #ccc',
  };

  const buttonStyle = {
    width: '100%',
    padding: '10px',
    borderRadius: '5px',
    border: 'none',
    backgroundColor: '#007BFF',
    color: '#fff',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  };

  const buttonHoverStyle = {
    backgroundColor: '#0056b3',
  };

  const messageStyle = {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    padding: '10px',
    borderRadius: '5px',
    color: '#000',
    marginTop: '20px',
  };

  return (
    <div style={containerStyle}>
      <h1>Create Booking</h1>
      <form onSubmit={handleSubmit} style={formStyle}>
        <div>
          <label>
            BookingId
            <input
              type="text"
              name="BookingId"
              value={booking.BookingId}
              onChange={handleChange}
              style={inputStyle}
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
              style={inputStyle}
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
              style={inputStyle}
            />
          </label>
        </div>
        <button
          type="submit"
          style={buttonStyle}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = buttonHoverStyle.backgroundColor)}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = buttonStyle.backgroundColor)}
        >
          Create Booking
        </button>
      </form>
      {response && (
        <div style={messageStyle}>
          <h2>Booking Created Successfully</h2>
          <pre>{JSON.stringify(response, null, 2)}</pre>
        </div>
      )}
      {error && (
        <div style={messageStyle}>
          <h2>Error</h2>
          <p>{error}</p>
        </div>
      )}
    </div>
  );
};

export default CreateBookingComponent;
