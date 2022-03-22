import React from "react";
import fakeposter from "../../img/fakeposter.png";
import "./Cards.css";
import Carousel from "react-elastic-carousel";
import { useState, useEffect } from "react";

export const CastCard = () => {
  const apiKey = "f1206acdc6dd0ff0374585c4b4b936a1";
  const url = `https://api.themoviedb.org/3/movie/718032/credits?api_key=${apiKey}&language=en-US`;

  const [cast, setCast] = useState([]);

  const loadCast = async () => {
    const response = await fetch(url);
    const data = await response.json();

    console.log(data);

    data && setCast(data.cast);
  };

  useEffect(() => {
    loadCast();
  }, []);

  const breakPoints = [{ itemsToShow: 4 }];

  return (
    <div className="film-cast">
      <Carousel breakPoints={breakPoints}>
        {cast.slice(0, 20).map((person) => (
          <div key={person.id}>
            {person.profile_path ? (
              <div>
                <img
                  className="real-poster-person"
                  src={`https://image.tmdb.org/t/p/original${person.profile_path}`}
                  alt={`Picture of ${person.name}`}
                />
              </div>
            ) : (
              <div>
                <img
                  className="filler-poster-person"
                  src={fakeposter}
                  alt="No Poster"
                />
              </div>
            )}
            <div>
              <p className="cast-character">
                <strong>{person.character}</strong>
              </p>
            </div>
            <div>
              <p className="cast-name">{person.name}</p>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};
