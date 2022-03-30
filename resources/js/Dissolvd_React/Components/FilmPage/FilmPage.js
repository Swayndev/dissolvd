import React, { Fragment, useState, useEffect, useContext } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import "./FilmPage.css";
import fakeposter from "../../img/fakeposter.png";

import { UserContext } from "../../../context/context";

import { DiscussionCard } from "./DiscussionCard/DiscussionCard";

// MUI IMPORTS //

import VisibilityIcon from "@mui/icons-material/Visibility";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";


import PlaylistAddCheckIcon from "@mui/icons-material/PlaylistAddCheck";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

// COMPONENTS THAT DISPLAY IN THE BODY //
import { CastCard } from "../Cards/CastCard";
import { CrewCard } from "../Cards/CrewCard";
import SearchResult from "../SearchResult/SearchResult";
import { RecommendCard } from "../Cards/RecommendCard";
import { useParams } from "react-router-dom";
import { ReviewModal } from "./ReviewModal/ReviewModal";



export const FilmPage = ({
    apiKey,
    movieResults,
    displayResults,
    setQuery,
}) => {
    // HANDLE MOVIE //

    const params = useParams();

    console.log(params);

    //STATES

    const [movie, setMovie] = useState([]);

    const handleMovie = async () => {
        const movieUrl = `https://api.themoviedb.org/3/movie/${params.id}?api_key=${apiKey}&language=en-US`;

        const response = await fetch(movieUrl);

        const data = await response.json();

        data && setMovie(data);
    };

    // LOAD CREDITS //

    const [credits, setCredits] = useState({});

    const loadCredits = async () => {
        const creditsUrl = `https://api.themoviedb.org/3/movie/${params.id}/credits?api_key=${apiKey}&language=en-US`;

        const response = await fetch(creditsUrl);

        let data = await response.json();

        data && setCredits(data);
    };

    // LOAD RECOMMENDED //

    const [recommend, setRecommend] = useState([]);

    const loadRecommend = async () => {
        const recommendUrl = `https://api.themoviedb.org/3/movie/${params.id}/recommendations?api_key=${apiKey}&language=en-US&page=1`;

        const response = await fetch(recommendUrl);

        const data = await response.json();

        data && setRecommend(data.results);
    };

    // WATCHED AND WATCHLIST //

    const [watched, setWatched] = useState(false);
    const [watchlist, setWatchlist] = useState(false);

    const handleWatched = () => {
        setWatched(true);
        console.log(watched);
    };

    const handleWatchedRemove = () => {
        setWatched(false);
        console.log(watched);
    };

    const handleWatchlist = () => {
        setWatchlist(true);
        console.log("this is watchlistadd", watchlist);
    };

    const handleWatchlistRemove = () => {
        setWatchlist(false);
        console.log("this is watchlistremove", watchlist);
    };

    // USEEFFECT SECTION  //

    useEffect(() => {
        handleMovie();
    }, [params.id]);

    useEffect(() => {
        if (movie.id) {
            loadCredits();
        }
    }, [movie, params.id]);

    useEffect(() => {
        if (movie.id) {
            loadRecommend();
        }
    }, [movie, params.id]);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [params.id]);
    

    // MODAL //

    const [modalIsOpen, setIsOpen] = useState(false);

    const openModal = () => {
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
    };

    // CONTEXT
    
    const { user } = useContext(UserContext);
    
    // RATING AND REVIEW LOGIC

    // const [stars, setStars] = useState(2.5);
    const [review, setReview] = useState('');

    // console.log('this is stars value', stars);
    

    const [reviewRating, setReviewRating] = useState ({
        review: "",
        rating: 2.5,
        watched:false,
    });

    console.log('CIAO BELLA THIS IS reviewRating', reviewRating)


    const handleReviewRatingSubmit = (e) => {
        e.preventDefault();
        

        
    }

    return (
        <>
            <SearchResult
                displayResults={displayResults}
                movieResults={movieResults}
                setQuery={setQuery}
            />

            <div className="film-wrap">
                <div className="film-backdrop-wrap">
                    {movie.backdrop_path ? (
                        <div className="film-backdrop">
                            <img
                                src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                            ></img>
                        </div>
                    ) : (
                        <div className="film-backrop-filler"></div>
                    )}
                </div>
                <div className="film-details-wrap">
                    {movie.poster_path ? (
                        <div className="film-poster">
                            {/* DEFINE THE POSTER AS A LINK TO THE APPROPRIATE FILM PAGE*/}
                            <img
                                className="real-poster-search"
                                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                                alt={`${movie.title} Poster`}
                            />
                        </div>
                    ) : (
                        <div className="film-poster">
                            <img
                                className="filler-poster-search"
                                src={fakeposter}
                                alt="No Poster Found"
                            />
                        </div>
                    )}
                    <div>
                        <div className="film-heading">
                            <h1 className="film-title">{movie.title}</h1>

                            {movie.release_date ? (
                                <p className="film-year">
                                    ({movie.release_date.substring(0, 4)})
                                </p>
                            ) : (
                                <p className="film-year">
                                    <i>(No Release Date)</i>
                                </p>
                            )}
                        </div>
                        <div className="film-director">
                            <p>Directed by</p>
                            {credits.crew &&
                                credits.crew.map((crew) => (
                                    <div>
                                        {crew.job === "Director" ? (
                                            <p>
                                                <strong>{crew.name}</strong>
                                            </p>
                                        ) : (
                                            <p></p>
                                        )}
                                    </div>
                                ))}
                            {user && (
                                <div className="film-user-btns">
                                    {watched === false ? (
                                        <button
                                            className="film-user-eye"
                                            onClick={openModal}
                                        >
                                            <VisibilityOffIcon fontSize="large" />
                                        </button>
                                    ) : (
                                        <button
                                            className="film-user-eye"
                                            onClick={handleWatchedRemove}
                                        >
                                            <VisibilityIcon
                                                color="action"
                                                fontSize="large"
                                            />
                                        </button>
                                    )}
                                    {watchlist === false ? (
                                        <button
                                            onClick={handleWatchlist}
                                            className="film-user-add"
                                        >
                                            <PlaylistAddIcon fontSize="large" />
                                        </button>
                                    ) : (
                                        <button
                                            onClick={handleWatchlistRemove}
                                            className="film-user-add"
                                        >
                                            <PlaylistAddCheckIcon
                                                color="action"
                                                fontSize="large"
                                            />
                                        </button>
                                    )}
                                </div>
                            )}
                        </div>
                    </div>



                    <ReviewModal 
                           modalIsOpen={modalIsOpen}
                           closeModal={closeModal}
                           movie={movie}
                           fakeposter={fakeposter}
                        //    user={user}
                    />



                    {/* <Modal
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
                                {/*
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
                                */}
                </div>

                <div className="film-overview">
                    <p>{movie.overview}</p>
                </div>

                <Tabs className="film-credits-wrap">
                    <TabList className="film-credits-heading">
                        <Tab>Cast</Tab>
                        <Tab>Crew</Tab>
                    </TabList>
                    {credits.cast && credits.crew && (
                        <Fragment>
                            <TabPanel>
                                <CastCard credits={credits} />
                            </TabPanel>
                            <TabPanel>
                                <CrewCard credits={credits} />
                            </TabPanel>
                        </Fragment>
                    )}
                </Tabs>

                <DiscussionCard watched={watched}/>

                <RecommendCard recommend={recommend} movie={movie} />
            </div>
        </>
    );
};
