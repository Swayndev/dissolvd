import React, { useEffect } from "react";
import { useState } from "react";
import { ResultCard } from "./ResultCard";
import Carousel from "react-elastic-carousel";
import "./Cards.css";

export const RecommendCard = ({ recommend, movie }) => {
    const breakPoints = [{ itemsToShow: 4 }];

    return (
        <>
            <div className="recommend">
                <div className="recommend-heading">
                    <p>
                        <strong>{`Recommended for `}</strong>
                        {`'${movie.title}'`}
                    </p>
                </div>

                <div className="recommend-movie">
                    <Carousel breakPoints={breakPoints}>
                        {recommend.map((movie) => (
                            <div key={movie.id}>
                                <ResultCard movie={movie} />
                            </div>
                        ))}
                    </Carousel>
                </div>
            </div>
        </>
    );
};
