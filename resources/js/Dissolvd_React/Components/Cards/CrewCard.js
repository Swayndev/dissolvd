import React from "react";
import "./Cards.css";

export const CrewCard = ({ credits }) => {
    return (
        <div className="film-crew-wrap">
            <div className="film-crew">
                <h4 className="film-crew-job">Directing</h4>
                {credits.crew.map((crew) => (
                    <>
                        {crew.job === "Director" ? (
                            <p className="film-crew-name">{crew.name}</p>
                        ) : (
                            <p className="film-crew-name"></p>
                        )}
                    </>
                ))}
            </div>
            <div className="film-crew">
                <h4 className="film-crew-job">Writing</h4>
                {credits.crew.map((crew) => (
                    <div>
                        {crew.department === "Writing" ? (
                            <p className="film-crew-name">{crew.name}</p>
                        ) : (
                            <p className="film-crew-name"></p>
                        )}
                    </div>
                ))}
            </div>
            <div className="film-crew">
                <h4 className="film-crew-job">Cinematography</h4>
                {credits.crew.map((crew) => (
                    <div>
                        {crew.job === "Director of Photography" ? (
                            <p className="film-crew-name">{crew.name}</p>
                        ) : (
                            <p className="film-crew-name"></p>
                        )}
                    </div>
                ))}
            </div>
            <div className="film-crew">
                <h4 className="film-crew-job">Editing</h4>
                {credits.crew.map((crew) => (
                    <div>
                        {crew.job === "Editor" ? (
                            <p className="film-crew-name">{crew.name}</p>
                        ) : (
                            <p className="film-crew-name"></p>
                        )}
                    </div>
                ))}
            </div>
            <div className="film-crew">
                <h4 className="film-crew-job">Music</h4>
                {credits.crew.map((crew) => (
                    <div>
                        {crew.job === "Original Music Composer" ? (
                            <p className="film-crew-name">{crew.name}</p>
                        ) : (
                            <p className="film-crew-name"></p>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};
