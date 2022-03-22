import React from "react";
import discuss from "../../../img/discuss.png";

export const HomeIntro = () => {
  return (
    <div className="intro-wrap">
      {/* INTRO */}
      <div className="intro">
        <div className="intro__info">
          <h1 className="intro__info--heading">
            A better way to discuss film.
          </h1>
          <h2 className="intro__info--subtitle">Watch. Post. Discuss.</h2>
          <button className="intro__info--btn">Get Started</button>
        </div>
        <div className="intro__photo">
          <img
            className="intro__photo--img"
            src={discuss}
            alt="picture of hands"
          />
        </div>
      </div>
    </div>
  );
};
