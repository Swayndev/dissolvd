import React from "react";
import "./HomePage.css";
import { HomeIntro } from "./Home/HomeIntro";
import { HomeGallery } from "./Home/HomeGallery";
import SearchResult from "../SearchResult/SearchResult";
import { ProfilePage } from "../ProfilePage/ProfilePage";

const HomePage = ({ movieResults, displayResults, setQuery }) => {
    return (
        <main className="main">
            <SearchResult
                displayResults={displayResults}
                movieResults={movieResults}
                setQuery={setQuery}
            />

            <HomeIntro />

            <HomeGallery />
        </main>
    );
};

export default HomePage;
