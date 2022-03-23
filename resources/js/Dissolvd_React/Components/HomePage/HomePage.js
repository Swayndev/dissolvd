import React from "react";
import "./HomePage.css";
import { HomeIntro } from "./Home/HomeIntro";
import { HomeGallery } from "./Home/HomeGallery";
import { HomeExplain } from "./Home/HomeExplain";
import { FilmPage } from "../FilmPage/FilmPage";

import SearchCard from "../Cards/SearchCard";

const HomePage = ({ movieResults, displayResults }) => {
    // console.log(results)

    

    return (
        <main className="main">
            <div className="search-wrap">
                <div className="search-card-wrap">
                    {displayResults &&
                        movieResults.map((movieResult) => (
                            <div key={movieResult.id}>
                                <SearchCard movieResult={movieResult} />
                            </div>
                        ))}
                </div>
            </div>

            <HomeIntro />

            <HomeGallery />
        </main>
    );
};

export default HomePage;
