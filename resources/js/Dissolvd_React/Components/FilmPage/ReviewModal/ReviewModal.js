import React, { Fragment, useState, useEffect, useContext } from "react";
import "react-tabs/style/react-tabs.css";
import "../FilmPage.css";
import Modal from "react-modal";


// MUI IMPORTS //
import Rating from "@mui/material/Rating";
import Checkbox from "@mui/material/Checkbox";
import { FormControlLabel } from "@mui/material";


export const ReviewModal = (
    {modalIsOpen, 
    closeModal,
    movie,
    fakeposter}
) => {


    const [reviewRating, setReviewRating] = useState ({
        review: "",
        rating: 2.5,
        watched:false,
    });

    console.log('CIAO BELLA THIS IS reviewRating', reviewRating)


    // const handleReviewRatingSubmit = (e) => {
    //     e.preventDefault();
        
        
    // }

    return  (

        <Modal
                        className="film-review-modal"
                        isOpen={modalIsOpen}
                        onRequestClose={closeModal}
                        contentLabel="Example Modal"
                    >
                        <form
                            className="film-review"
                            // ADRIEN WORKING ON THIS FORM
                            // onSubmit={handleSubmit}
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
                                            value={reviewRating.rating}
                                            onChange={(e) => {
                                                setReviewRating({...reviewRating, rating: Number(e.target.value)});
                                            }}
                                            hidden
                                            readOnly
                                        />

                                        <Rating
                                            name="rating"
                                            className="film-review-stars"
                                            value={reviewRating.rating}
                                            defaultValue={0}
                                            precision={0.5}
                                            size="large"
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
                                    }}
                                >
                                </textarea>
                                <div className="film-review-check">
                            
                                    <Checkbox
                                        required="true"
                                        color="success"
                                        size="medium"
                                        value={reviewRating.checked}
                                        onChange={(e) => {
                                            setReviewRating({...reviewRating, checked: e.target.value});
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