
import axios from 'axios';
export const updateMovieComment = async (comment) => {
    const response = await axios.put('/api/comments/update', comment);
    return response.data;
};