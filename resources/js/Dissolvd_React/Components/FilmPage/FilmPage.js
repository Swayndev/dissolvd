import React from "react";
import { useState, useEffect } from "react";
import testposter from "../../img/testposter.jpeg";
import testbackdrop from "../../img/testbackdrop.jpeg";
import { CastCard } from "../Cards/CastCard";
import { CrewCard } from "../Cards/CrewCard";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import "./FilmPage.css";

export const FilmPage = () => {
  return (
    <>
      <div className="film-wrap">
        <div className="film-backdrop-wrap">
          <div className="film-backdrop">
            <img src={testbackdrop}></img>
          </div>
        </div>
        <div className="film-details-wrap">
          <div className="film-poster">
            <img src={testposter}></img>
          </div>
          <div>
            <div className="film-heading">
              <h1 className="film-title">Licorice Pizza</h1>
              <p className="film-year">(2021)</p>
            </div>
            <div className="film-director">
              <p>Directed by</p>
              <p>
                <strong>Paul Thomas Anderson</strong>
              </p>
            </div>
          </div>
          <div className="film-buttons"></div>
        </div>
        <div className="film-overview">
          <p>
            In the San Fernando Valley in 1973, 15-year-old Gary Valentine
            prepares for his high school picture day. He notices 25-year-old
            Alana Kane, a photographer's assistant, and strikes up conversation
            with her. She rebuffs his advances, but meets him for dinner and
            they begin a friendship. Gary attends auditions and appears in a
            variety show with Lucy Doolittle, and when Gary's mother Anita
            cannot take him to perform in New York, Alana chaperones him
            instead. On the plane, Alana meets Lance, one of Gary's co-stars in
            a Doolittle film; they begin dating, but break up after an awkward
            dinner with Alana's family.
          </p>
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
    </>
  );
};
