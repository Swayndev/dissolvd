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
            movieResults.map((movie) => (
              <div key={movie.id}>
                <SearchCard movie={movie} />
              </div>
            ))}
        </div>
      </div>

      <HomeIntro />

      <HomeGallery />

      <HomeExplain />

      <FilmPage />
    </main>
  );
};

export default HomePage;
