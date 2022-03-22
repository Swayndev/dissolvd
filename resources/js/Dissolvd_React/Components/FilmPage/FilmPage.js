import React from "react";
import { useState, useEffect } from "react";

import { CastCard } from "../Cards/CastCard";
import { CrewCard } from "../Cards/CrewCard";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import "./FilmPage.css";

export const FilmPage = ({movie}) => {
  
  console.log(movie)
  
  return (
    <div>
      <div className="film-wrap">
        <div className="film-backdrop-wrap">
          <div className="film-backdrop">
            <img src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}></img>
          </div>
        </div>
        <div className="film-details-wrap">
          <div className="film-poster">
            <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}></img>
          </div>
          <div>
            <div className="film-heading">
              <h1 className="film-title">{movie.title}</h1>

              {movie.release_date ? (
                <p className="film-year">({movie.release_date.substring(0, 4)})</p>
              ) : (
                <p className="film-year">
                  <i>(Unreleased)</i>
                </p>
              )}

            </div>
            <div className="film-director">
              <p>Directed by</p>
              <p>
                {/* TO COMPLETE LATER */}
                <strong>Paul Thomas Anderson</strong>
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
            <CastCard />
          </TabPanel>
          <TabPanel>
            <CrewCard />
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

// export default FilmPage;