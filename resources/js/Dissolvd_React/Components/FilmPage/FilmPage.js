import React from "react";
import { CastCard } from "../Cards/CastCard";
import { CrewCard } from "../Cards/CrewCard";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import "./FilmPage.css";
import fakeposter from "../../img/fakeposter.png";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export const FilmPage = () => {

    const apiKey = "f1206acdc6dd0ff0374585c4b4b936a1";

    const [movie, setMovie] = useState([]);

    const handleMovie = async () => {
        const movieUrl = `https://api.themoviedb.org/3/movie/400617?api_key=${apiKey}&language=en-US`;

        const response = await fetch(movieUrl);

        const data = await response.json();

        data && setMovie(data);
    };


    // useParams hook HAS TO be used here to make sure the redirection is done towards the right movieResult.id coming from the API
    const params = useParams()
    // THIS IS GOING TO BE TRICKY





    console.log(params)

    useEffect(() => {
        handleMovie();
    }, []);

  
    return (
        <div>
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
                            <p>
                                {/* TO COMPLETE LATER */}
                                <strong>David Fincher</strong>
                            </p>
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

                    <TabPanel>
                        <CastCard movie={movie} />
                    </TabPanel>
                    <TabPanel>
                        <CrewCard movie={movie} />
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

// export default FilmPage;
