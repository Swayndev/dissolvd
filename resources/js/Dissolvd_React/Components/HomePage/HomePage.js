import React from "react";
import "./HomePage.css";
import { HomeIntro } from "./Home/HomeIntro";
import { HomeGallery } from "./Home/HomeGallery";
import SearchResult from "../SearchResult/SearchResult";

const HomePage = ({ movieResults, displayResults }) => {
    return (
        <main className="main">
            <SearchResult
                displayResults={displayResults}
                movieResults={movieResults}
            />

            <HomeIntro />

            <HomeGallery  />
        </main>
    );
};

export default HomePage;
