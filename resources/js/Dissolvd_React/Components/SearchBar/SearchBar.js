import React from "react";

import search_icon from "../../img/search_icon.png";


const SearchBar = ({setQuery, query}) => {
  


  return (
    <div className="desktop__search">
      <input
        className="desktop__search--input" // add hidden class to hide
        type="text"
        placeholder="search..."
        autocomplete="off"
        value={query}
        onChange={(e) => setQuery(e.target.value || '')}
        name="text"
        required
      />

      <img className="desktop__search--icon" src={search_icon} alt="search-icon" />

      <div className="results-movie">

        {/*

        {!!results.length && results.map((movie) => (
          <div key={movie.id}>
            <ResultCard movie={movie} />
          </div>
        ))}

      */}

        
      </div>
    </div>
  );
};

export default SearchBar;
