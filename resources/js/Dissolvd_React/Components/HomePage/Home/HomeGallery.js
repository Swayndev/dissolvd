import React from "react";
import LatestCards from "../../Cards/LatestCards";
import PopularCards from "../../Cards/PopularCards";

export const HomeGallery = ( {setMovieId}) => {
  return (
    <div>
      <PopularCards
      setMovieId={setMovieId}
       />
      <LatestCards
        setMovieId={setMovieId}
      />
    </div>
  );
};
