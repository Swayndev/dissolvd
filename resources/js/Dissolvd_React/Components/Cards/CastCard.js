import React, { useEffect } from "react";
import "./Cards.css";
import Carousel from "react-elastic-carousel";
import fakeposter from "../../img/fakeposter.png";

export const CastCard = ({ credits }) => {
    const breakPoints = [{ itemsToShow: 4, itemPadding: [10, 10, 10, 10] }];

    return (
        <>
            <Carousel breakPoints={breakPoints}>
                {credits.cast.slice(0, 20).map((person) => (
                    <div className="film-cast" key={person.id}>
                        {person.profile_path ? (
                            <>
                                <img
                                    className="real-poster-person"
                                    src={`https://image.tmdb.org/t/p/h632${person.profile_path}`}
                                    alt={`Picture of ${person.name}`}
                                />
                            </>
                        ) : (
                            <>
                                <img
                                    className="filler-poster-person"
                                    src={fakeposter}
                                    alt="No Poster"
                                />
                            </>
                        )}
                        <>
                            <p className="cast-character">
                                <strong>{person.character}</strong>
                            </p>
                        </>
                        <>
                            <p className="cast-name">{person.name}</p>
                        </>
                    </div>
                ))}
            </Carousel>
        </>
    );
};
