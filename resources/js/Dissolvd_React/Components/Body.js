import { useState, useEffect } from "react";

import { Routes, Route, Link } from "react-router-dom";

// importing components that display in the body
import { Header } from "./Header/Header";
import HomePage from "./HomePage/HomePage";
import { Footer } from "./Footer/Footer";
import { FilmPage } from "./FilmPage/FilmPage";

import { CreateAccountPage } from "./CreateAccountPage/CreateAccountPage";

const Body = () => {
    const apiKey = "f1206acdc6dd0ff0374585c4b4b936a1";

    // ============ FETCH HOME =================
    // REACT HOOKS

    const [query, setQuery] = useState("");

    const [movieResults, setMovieResults] = useState([]);

    const [movieId, setMovieId] = useState(550);

    // DO NOT FORGET TO DISPLAY ERROR MESSAGE IF TITLE DOES NOT EXIST OR IF LOADING TIME IS SLOW\
    const [errorMessage, setErrorMessage] = useState([]);

    useEffect(() => {
        if (query !== "") {
            handleSearch();
        } else {
            setMovieResults([]);
        }
    }, [query]);



    console.log(movieId)

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
            <Header setQuery={setQuery} query={query} />

            <Routes>
                <Route
                    exact path="/"
                    element={
                        <HomePage
                            displayResults={!!movieResults.length && query !== ""}
                            movieResults={movieResults}
                            setMovieId={setMovieId}
                            setQuery={setQuery}
                        />
                    }
                />

                <Route
                    exact path="/movie/:id"
                    element={
                        <FilmPage
                            displayResults={!!movieResults.length && query !== ""}
                            movieResults={movieResults}
                            setMovieId={setMovieId}
                            setQuery={setQuery}
                            movieId={movieId}
                            apiKey={apiKey}
                            query={query}
                        />
                    }
                />

                <Route 
                    exact path="/create-account"
                    element={ 
                        <CreateAccountPage
                            displayResults={!!movieResults.length && query !== ""}
                            movieResults={movieResults}
                            setMovieId={setMovieId}
                            setQuery={setQuery}
                        />
                    }
                />



                {/* FOR FUTURE ROUTE  */}
            </Routes>

            
            <Footer />
        </div>
    );
};

export default Body;
