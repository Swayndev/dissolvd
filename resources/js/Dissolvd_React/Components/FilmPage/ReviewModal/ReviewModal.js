import React, { useState, useEffect, useContext } from "react";
import "react-tabs/style/react-tabs.css";
import "../FilmPage.css";
import Modal from "react-modal";
import axios from "axios";

// MUI IMPORTS //
import Rating from "@mui/material/Rating";
import Checkbox from "@mui/material/Checkbox";
import { FormControlLabel } from "@mui/material";
import { useParams } from "react-router-dom";
import { UserContext } from "../../../../context/context";


export const ReviewModal = (
    {modalIsOpen, 
    closeModal,
    movie,
    fakeposter} ) => {

    // PARAMS is used to retrieved the movie.id from the database
    const params = useParams(); 
    
    // CONTEXT
    
    const {user} = useContext(UserContext);

    // STATES
    const [reviewRating, setReviewRating] = useState ({
        rating: 2.5,
        review: "",
        is_watched: false,
        // movie_id: Number(params.id),
        // user_id: user ? user.id : null,
    });

    console.log('reviewRating ==>', reviewRating)


    useEffect(() => {
        setReviewRating({
            ...reviewRating,
            
            // movie_id and user_id need to be included into 
            movie_id: Number(params.id),
            user_id: user ? user.id : null,
        });
    }, [params, user]);
    

    const handleReviewRatingSubmit = (e) => {
        e.preventDefault();

        axios.post('/api/opinion/'+ params.id, reviewRating)
        
        // setReviewRating();

        location.reload();
        
    }

    return  (

        <Modal
            className="film-review-modal"
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            contentLabel="Example Modal"
        >
            <form
                className="film-review"
                onSubmit={handleReviewRatingSubmit}
               
                >
                {movie.poster_path ? (
                    <div className="film-review-info">
                        <img
                            className="film-review-poster"
                            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                            alt={`${movie.title} Poster`}
                        />

                        <h3>{`${movie.title}`}</h3>
                    </div>
                ) : (
                    <div className="film-review-info">
                        <img
                            className="film-review-poster"
                            src={fakeposter}
                            alt="No Poster Found"
                        />
                        <h3>{`${movie.title}`}</h3>
                    </div>
                )}
                <div className="film-review-rate">
                    <p className="film-review-rating">
                        <strong>Rating</strong>
                    </p>
                    
                    <FormControlLabel
                        control={
                            <div>
                                <input
                                    name="rating"
                                    type="number"
                                    hidden
                                    readOnly
                                    // value={reviewRating.rating}
                                    // onChange={(e) => {
                                    //     setReviewRating({...reviewRating, rating: Number(e.target.value)});
                                    // }}
                                />

                                <Rating
                                    name="rating"
                                    className="film-review-stars"
                                    defaultValue={0}
                                    precision={0.5}
                                    size="large"
                                    value={reviewRating.rating}
                                    onChange={(e) => {
                                        setReviewRating({...reviewRating, rating: Number(e.target.value)});
                                    }}
                                />
                            </div>
                        }
                        label={" "}
                    />

                    <textarea
                        className="film-review-text"
                        placeholder="Add a review..."
                        value={reviewRating.review}
                        onChange={(e) => {
                            setReviewRating({...reviewRating, review: e.target.value});
                        }}>
                    </textarea>
                    <div className="film-review-check">
                
                        <Checkbox
                            required="true"
                            color="success"
                            size="medium"
                            value={reviewRating.is_watched}
                            onChange={(e) => {
                                setReviewRating({...reviewRating, is_watched: e.target.checked});
                            }}
                        />
                        
                        <p>{`I confirm I have watched ${movie.title}`}</p>
                    </div>
                    <button
                        className="film-review-btn"
                        type="submit"
                    >
                        Save
                    </button>
                </div>
            </form>
        </Modal> 










    //     <Modal
    //     className="film-review-modal"
    //     isOpen={modalIsOpen}
    //     onRequestClose={closeModal}
    //     contentLabel="Example Modal"
    // >
    //     <form className="film-review">
    //         {movie.poster_path ? (
    //             <div className="film-review-info">
    //                 <img
    //                     className="film-review-poster"
    //                     src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
    //                     alt={`${movie.title} Poster`}
    //                 />

    //                 <h3>{`${movie.title}`}</h3>
    //             </div>
    //         ) : (
    //             <div className="film-review-info">
    //                 <img
    //                     className="film-review-poster"
    //                     src={fakeposter}
    //                     alt="No Poster Found"
    //                 />
    //                 <h3>{`${movie.title}`}</h3>
    //             </div>
    //         )}
    //         <div className="film-review-rate">
    //             <p className="film-review-rating">
    //                 <strong>Rating</strong>
    //             </p>
    //             <Rating
    //                 className="film-review-stars"
    //                 name="half-rating"
    //                 defaultValue={0}
    //                 precision={0.5}
    //                 size="large"
    //             />

    //             <textarea
    //                 className="film-review-text"
    //                 placeholder="Add a review..."
    //             ></textarea>
    //             <div className="film-review-check">
    //                 <Checkbox
    //                     required="true"
    //                     color="success"
    //                     size="medium"
    //                 />
    //                 <p>{`I confirm I have seen ${movie.title}`}</p>
    //             </div>
    //             <button
    //                 className="film-review-btn"
    //                 type="submit"
    //                 value="submit"
    //             >
    //                 Save
    //             </button>
    //         </div>
    //     </form>
    // </Modal>

    )
}