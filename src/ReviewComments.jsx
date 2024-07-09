// src/components/MovieComments.js
import React, { useState, useEffect } from 'react';
import { getAllMovieComments } from './servics/getMovieComments';

const MovieComments = ({ movieId, pageNumber = 1, pageSize = 10 }) => {
    const [comments, setComments] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchComments = async () => {
            try {
                setLoading(true);
                const data = await getAllMovieComments(movieId, pageNumber, pageSize);
                setComments(data);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        fetchComments();
    }, [movieId, pageNumber, pageSize]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error fetching comments: {error.message}</p>;

    return (
        <div>
            <h2>Movie Comments</h2>
            <ul>
                {comments.map(comment => (
                    <li key={comment.reviewId}>
                        <p><strong>{comment.reviewerName}</strong>: {comment.reviewText}</p>
                        <p>Rating: {comment.rating}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MovieComments;
