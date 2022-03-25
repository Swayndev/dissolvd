import React from "react";
import "./HomePage.css";
import { HomeIntro } from "./Home/HomeIntro";
import { HomeGallery } from "./Home/HomeGallery";
import SearchResult from "../SearchResult/SearchResult";

const HomePage = ({ movieResults, displayResults, setMovieId, setQuery }) => {
    return (
        <main className="main">
            <SearchResult
                displayResults={displayResults}
                movieResults={movieResults}
                setMovieId={setMovieId}
                setQuery={setQuery}
            />

            <HomeIntro />

            <HomeGallery setMovieId={setMovieId} />
        </main>
    );
};

export default HomePage;
