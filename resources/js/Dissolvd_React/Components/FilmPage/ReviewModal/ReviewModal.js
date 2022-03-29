import React, { Fragment, useState, useEffect, useContext } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import "../FilmPage.css";
import Modal from "react-modal";


// MUI IMPORTS //
import Rating from "@mui/material/Rating";
import VisibilityIcon from "@mui/icons-material/Visibility";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import Checkbox from "@mui/material/Checkbox";




export const ReviewModal = (
    {modalIsOpen, 
    closeModal,
    movie,
    fakeposter}
) => {


    return  (


        <Modal
        className="film-review-modal"
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
    >
        <form className="film-review">
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
                <Rating
                    className="film-review-stars"
                    name="half-rating"
                    defaultValue={0}
                    precision={0.5}
                    size="large"
                />

                <textarea
                    className="film-review-text"
                    placeholder="Add a review..."
                ></textarea>
                <div className="film-review-check">
                    <Checkbox
                        required="true"
                        color="success"
                        size="medium"
                    />
                    <p>{`I confirm I have seen ${movie.title}`}</p>
                </div>
                <button
                    className="film-review-btn"
                    type="submit"
                    value="submit"
                >
                    Save
                </button>
            </div>
        </form>
    </Modal>

    )
}