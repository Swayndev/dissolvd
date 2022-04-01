import {useContext} from "react";
import discuss from "../../../img/discusscropped.png";
import { UserContext } from "../../../../context/context";

import { Link } from "react-router-dom";

export const HomeIntro = () => {

     const { user } = useContext(UserContext);

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
                    {!user && (
                        <Link to="/register">
                        <button type="type" className="intro__info--btn">
                            Get Started
                        </button>
                    </Link>
                    )}
                    
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
