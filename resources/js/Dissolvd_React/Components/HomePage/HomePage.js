import React from "react";
import "./HomePage.css";
import { HomeIntro } from "./Home/HomeIntro";
import { HomeGallery } from "./Home/HomeGallery";
// import { HomeExplain } from "./Home/HomeExplain";
import SearchResult from "../SearchResult/SearchResult";

import SearchCard from "../Cards/SearchCard";
import { CreateAccountPage } from "../CreateAccountPage/CreateAccountPage";

const HomePage = ({ movieResults, displayResults, setMovieId, setQuery }) => {
    // console.log(results)

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
