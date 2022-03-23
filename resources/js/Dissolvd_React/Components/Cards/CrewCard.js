import React from "react";
import fakeposter from "../../img/fakeposter.png";
import "./Cards.css";
import Carousel from "react-elastic-carousel";
import { useState, useEffect } from "react";

export const CrewCard = ({ movie }) => {
    const apiKey = "f1206acdc6dd0ff0374585c4b4b936a1";

    const url = `https://api.themoviedb.org/3/movie/${movie.id}/credits?api_key=${apiKey}&language=en-US`;

    const [crew, setCrew] = useState([]);

    const loadCrew = async () => {
        const response = await fetch(url);
        const data = await response.json();

        data &&
            setCrew(
                data.crew.sort(
                    (a, b) =>
                        parseFloat(b.popularity) - parseFloat(a.popularity)
                )
            );
    };

    useEffect(() => {
        if (movie.id) {
            loadCrew();
        }
    }, [movie]);

    // const breakPoints = [{ itemsToShow: 4 }];

    return (
        <div className="film-crew-wrap">
            {crew.map((crew) => {
                {
                    {
                        crew.job === "Director" ? (
                            <div className="film-crew">
                                <h4 className="film-crew-job">Directing</h4>
                                <p className="film-crew-name">{crew.name}</p>
                            </div>
                        ) : (
                            <div className="film-crew">
                                <h4 className="film-crew-job">Directing</h4>
                                <p className="film-crew-name">No Director</p>
                            </div>
                        );
                    }
                }
            })}
            <div className="film-crew">
                <h4 className="film-crew-job">Writing</h4>
                <p className="film-crew-name"></p>
            </div>
            <div className="film-crew">
                <h4 className="film-crew-job">Cinematography</h4>
                <p className="film-crew-name"></p>
            </div>
            <div className="film-crew">
                <h4 className="film-crew-job">Editing</h4>
                <p className="film-crew-name"></p>
            </div>
            <div className="film-crew">
                <h4 className="film-crew-job">Music</h4>
                <p className="film-crew-name"></p>
            </div>
        </div>
    );
};
