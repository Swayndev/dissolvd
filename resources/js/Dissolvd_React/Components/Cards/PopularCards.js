import React, { useEffect } from "react";
import { useState } from "react";
import { ResultCard } from "./ResultCard";
import Carousel from "react-elastic-carousel";
import "./Cards.css";

const PopularCards = () => {
    const apiKey = "f1206acdc6dd0ff0374585c4b4b936a1";
    const url = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`;

    const [popular, setPopular] = useState([]);

    const loadPopular = async () => {
        const response = await fetch(url);
        const data = await response.json();

        data && setPopular(data.results);
    };

    useEffect(() => {
        loadPopular();
    }, []);

    const breakPoints = [{ itemsToShow: 4 }];

    return (
        <>
            <div className="popular">
                <div className="popular-heading">
                    <p>Popular this week</p>
                </div>

                <div className="popular-movie">
                    <Carousel breakPoints={breakPoints}>
                        {popular.map((movie) => (
                            <div key={movie.id}>
                                <ResultCard
                                    movie={movie}
                                />
                            </div>
                        ))}
                    </Carousel>
                </div>
            </div>
        </>
    );
};

export default PopularCards;
