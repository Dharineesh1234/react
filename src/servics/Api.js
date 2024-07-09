// Api.js
import axios from 'axios';

const API_URL = 'https://localhost:7205/api/Movie';

const createBooking = (booking) => {
  return axios.post(`${API_URL}/CreateBooking`, booking);
};

const api = {
  createBooking,
};

export default api;
