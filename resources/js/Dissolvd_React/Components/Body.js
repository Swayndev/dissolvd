import { useState, useEffect } from "react";

import { Routes, Route, Link } from "react-router-dom";

// importing components that display in the body
import { Header } from "./Header/Header";
import HomePage from "./HomePage/HomePage";
import { Footer } from "./Footer/Footer";
import { FilmPage } from "./FilmPage/FilmPage";

const Body = () => {
    const apiKey = "f1206acdc6dd0ff0374585c4b4b936a1";

    // ============ FETCH HOME =================
    // REACT HOOKS

    const [query, setQuery] = useState("");

    const [movieResults, setMovieResults] = useState([]);

    // DO NOT FORGET TO DISPLAY ERROR MESSAGE IF TITLE DOES NOT EXIST OR IF LOADING TIME IS SLOW\
    const [errorMessage, setErrorMessage] = useState([]);

    useEffect(() => {
        if (query !== "") {
            handleSearch();
        } else {
            setMovieResults([]);
        }
    }, [query]);

    // FUNCTIONS AND LOGIC
    const handleSearch = async (e) => {
        const response = await fetch(
            `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&page=1&include_adult=false&query=${query}`
        );

        const data = await response.json();

        data && !!data.results.length && setMovieResults(data.results);
    };

    // ======== FETCH INDIVIDUAL MOVIES =================

    return (
        <div>
            <Header setQuery={setQuery} />

            <Routes>
                <Route
                    exact
                    path="/"
                    element={
                        <HomePage
                            movieResults={movieResults}
                            displayResults={
                                !!movieResults.length && query !== ""
                            }
                        />
                    }
                />

                <Route exact path="/movie/:movie_id" element={<FilmPage />} />
            </Routes>
            <FilmPage />

            <Footer />
        </div>
    );
};

export default Body;
