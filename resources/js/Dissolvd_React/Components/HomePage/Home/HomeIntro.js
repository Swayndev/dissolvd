import React from "react";
import discuss from "../../../img/discuss.png";

import { Link } from "react-router-dom";

export const HomeIntro = () => {
    return (
        <div className="intro-wrap">
            {/* INTRO */}
            <div className="intro">
                <div className="intro__info">
                    <h1 className="intro__info--heading">
                        A better way to discuss film.
                    </h1>
                    <h2 className="intro__info--subtitle">
                        Watch. Post. Discuss.
                    </h2>
                    {/* 
          ORIGINAL BUTTON DESIGNED BY JAYKE:
          <button type="type" className="intro__info--btn">
            Get Started
          </button>
        */}
                    <Link to="/register">
                        <button type="type" className="intro__info--btn">
                            Get Started
                        </button>
                    </Link>
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
