// src/services/movieService.js
import axios from 'axios';

const API_URL = 'https://localhost:7205/api/Movie'; // Replace with your actual API base URL

export const getAllMovieComments = async (movieId = null, pageNumber = 1, pageSize = 10) => {
    try {
        const response = await axios.get(`${API_URL}/GetAll`, {
            params: {
                MovieId: movieId,
                pageNumber: pageNumber,
                pageSize: pageSize
            }
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching movie comments:', error);
        throw error;
    }
};
