import React, { useState, useEffect } from 'react';
import { getAllMovieComments, updateMovieComment } from './servics/getMovieComments';
import Modal from 'react-modal';

const MovieComments = ({ movieId, pageNumber = 1, pageSize = 10 }) => {
    const [comments, setComments] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [editComment, setEditComment] = useState(null);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [updatedReviewText, setUpdatedReviewText] = useState("");

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

    const openModal = (comment) => {
        setEditComment(comment);
        setUpdatedReviewText(comment.reviewText);
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
        setEditComment(null);
    };

    const handleUpdate = async () => {
        try {
            await updateMovieComment({ ...editComment, reviewText: updatedReviewText });
            setComments(comments.map(c => c.reviewId === editComment.reviewId ? { ...c, reviewText: updatedReviewText } : c));
            closeModal();
        } catch (err) {
            setError(err);
        }
    };

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error fetching comments: {error.message}</p>;

    const containerStyle = {
        backgroundColor: '#f0f0f0',
        padding: '20px',
        borderRadius: '10px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        margin: '20px auto',
        maxWidth: '800px',
        textAlign: 'center'
    };

    const listStyle = {
        listStyleType: 'none',
        padding: 0
    };

    const itemStyle = {
        backgroundColor: '#ffffff',
        margin: '10px 0',
        padding: '15px',
        borderRadius: '10px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        transition: 'transform 0.2s, boxShadow 0.2s',
        cursor: 'pointer',
    };

    const itemHoverStyle = {
        transform: 'scale(1.02)',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)'
    };

    const reviewerStyle = {
        fontSize: '1.1em',
        color: '#333',
        marginBottom: '5px'
    };

    const ratingStyle = {
        fontSize: '0.9em',
        color: '#777'
    };

    const modalStyle = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            padding: '20px',
            borderRadius: '10px'
        }
    };

    return (
        <div style={containerStyle}>
            <h2>Movie Comments</h2>
            <ul style={listStyle}>
                {comments.map(comment => (
                    <li
                        key={comment.reviewId}
                        style={itemStyle}
                        onMouseEnter={(e) => e.currentTarget.style = {...itemStyle, ...itemHoverStyle}}
                        onMouseLeave={(e) => e.currentTarget.style = itemStyle}
                        onClick={() => openModal(comment)}
                    >
                        <p style={reviewerStyle}><strong>{comment.reviewerName}</strong>: {comment.reviewText}</p>
                        <p style={ratingStyle}>Rating: {comment.rating}</p>
                    </li>
                ))}
            </ul>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={modalStyle}
                contentLabel="Edit Comment"
            >
                <h2>Edit Comment</h2>
                {editComment && (
                    <div>
                        <textarea
                            value={updatedReviewText}
                            onChange={(e) => setUpdatedReviewText(e.target.value)}
                            rows="5"
                            cols="50"
                        />
                        <br />
                        <button onClick={handleUpdate}>Update</button>
                        <button onClick={closeModal}>Cancel</button>
                    </div>
                )}
            </Modal>
        </div>
    );
};

export default MovieComments;
