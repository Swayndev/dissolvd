import React, { Fragment, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import "./FilmPage.css";
import fakeposter from "../../img/fakeposter.png";

// importing components that display in the body
import { CastCard } from "../Cards/CastCard";
import { CrewCard } from "../Cards/CrewCard";
import SearchResult from "../SearchResult/SearchResult";


export const FilmPage = ({ apiKey, movieId, movieResults, displayResults, setMovieId, setQuery}) => {
    
    // USESTATE AND FUNCTIONS SECTION
    const [movie, setMovie] = useState([]);

    const handleMovie = async () => {
        const movieUrl = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}&language=en-US`;

        // const movieUrlAdrien = `https://api.themoviedb.org/3/movie/${}?api_key=${apiKey}&language=en-US`;

        const response = await fetch(movieUrl);

        const data = await response.json();

        data && setMovie(data);
    };

    // useParams hook HAS TO be used here to make sure the redirection is done towards the right movieResult.id coming from the API
    // const params = useParams();


    const [credits, setCredits] = useState({});
    // const params = useParams()
    // console.log(params)

    const loadCredits = async () => {
        const creditsUrl = `https://api.themoviedb.org/3/movie/${movie.id}/credits?api_key=${apiKey}&language=en-US`;

        const response = await fetch(creditsUrl);

        let data = await response.json();

        data && setCredits(data);
    };


    // USEEFFECT SECTION  ////////////////////////////////////
    useEffect(() => {
        if (movie.id) {
            loadCredits();
        }
    }, [movie]);


    // This will trigger the handleMovie function each time the page load and reload
    useEffect(() => {
        handleMovie();
    }, [movieId]);

    return (

        <div>

            <SearchResult
                displayResults={displayResults}
                movieResults={movieResults}
                setMovieId={setMovieId}
                setQuery={setQuery} 
            />
            <div className="film-wrap">
                <div className="film-backdrop-wrap">
                    <div className="film-backdrop">
                        <img
                            src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                        ></img>
                    </div>
                </div>
                <div className="film-details-wrap">
                    {movie.poster_path ? (
                        <div className="film-poster">
                            {/* DEFINE THE POSTER AS A LINK TO THE APPROPRIATE FILM PAGE*/}
                            <img
                                className="real-poster-search"
                                src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
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
                        </div>
                    </div>
                    <div className="film-buttons"></div>
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
            </div>
        </div>
    );
};
