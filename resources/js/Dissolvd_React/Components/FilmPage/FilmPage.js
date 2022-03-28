import React, { Fragment, useState, useEffect } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import "./FilmPage.css";
import fakeposter from "../../img/fakeposter.png";
import Modal from "react-modal";

// MUI IMPORTS //
import Rating from "@mui/material/Rating";
import VisibilityIcon from "@mui/icons-material/Visibility";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import Checkbox from "@mui/material/Checkbox";

// COMPONENTS THAT DISPLAY IN THE BODY //
import { CastCard } from "../Cards/CastCard";
import { CrewCard } from "../Cards/CrewCard";
import SearchResult from "../SearchResult/SearchResult";
import { RecommendCard } from "../Cards/RecommendCard";
import { useParams } from "react-router-dom";

export const FilmPage = ({
    apiKey,
    movieId,
    movieResults,
    displayResults,
    setMovieId,
    setQuery,
}) => {
    // HANDLE MOVIE //

    const params = useParams()

    console.log(params);
    

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
    
    // USEEFFECT SECTION  //

    useEffect(() => {
        handleMovie();
    }, [movieId, params.id]);

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
    }, [movieId, params.id]);

    // MODAL //

    const [modalIsOpen, setIsOpen] = useState(false);

    const openModal = () => {
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
    };

    // WATCHLIST ALERT //

    const [listAlert, setListAlert] = useState(false);

    const handleListAlert = () => {
        setListAlert(true);
    };

    const handleListAlertClose = () => {
        setListAlert(false);
    };

    return (
        <>
            <SearchResult
                displayResults={displayResults}
                movieResults={movieResults}
                setMovieId={setMovieId}
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
                            <div className="film-user-btns">
                                <button
                                    className="film-user-eye"
                                    onClick={openModal}
                                >
                                    <VisibilityIcon fontSize="large" />
                                </button>
                                <button
                                    onClick={handleListAlert}
                                    className="film-user-add"
                                >
                                    <PlaylistAddIcon fontSize="large" />
                                </button>
                            </div>
                        </div>
                    </div>
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
                <RecommendCard
                    recommend={recommend}
                    setMovieId={setMovieId}
                    movie={movie}
                />
            </div>

            {/* ALERTS */}
            <Snackbar
                open={listAlert}
                autoHideDuration={3000}
                onClose={handleListAlertClose}
            >
                <Alert
                    severity="success"
                    sx={{ width: "100%" }}
                    onClose={handleListAlertClose}
                >
                    {`${movie.title} has been added to your Watchlist`}
                </Alert>
            </Snackbar>
        </>
    );
};
