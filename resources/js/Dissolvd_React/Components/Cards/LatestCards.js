import React, { useEffect } from "react";
import { useState } from "react";
import { ResultCard } from "./ResultCard";
import Carousel from "react-elastic-carousel";
import "./Cards.css";

const LatestCards = ({setMovieId}) => {
  const apiKey = "f1206acdc6dd0ff0374585c4b4b936a1";
  const url = `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&language=en-US&page=1`;

  const [latest, setLatest] = useState([]);

  const loadLatest = async () => {
    const response = await fetch(url);
    const data = await response.json();

    data && setLatest(data.results);
  };

  useEffect(() => {
    loadLatest();
  }, []);

  const breakPoints = [{ itemsToShow: 4 }];

  return (
    <div>
      <div className="latest">
        <div className="latest-heading">
          <p>Latest films</p>
        </div>
        <div className="latest-movie">
          <Carousel breakPoints={breakPoints}>
            {latest.map((movie) => (
              <div key={movie.id}>
                <ResultCard 
                movie={movie} 
                setMovieId={setMovieId}
                />
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default LatestCards;
