import {useState, useEffect} from 'react'

import { Header } from "./Header/Header";
import  HomePage  from "./HomePage/HomePage";
import { Footer } from "./Footer/Footer";
import SearchBar from './SearchBar/SearchBar';

const Body = () => {

    // REACT HOOKS
    const apiKey = "f1206acdc6dd0ff0374585c4b4b936a1";

  const [query, setQuery] = useState("");

  const [movieResults, setMovieResults] = useState([]);

  const [errorMessage, setErrorMessage] = useState([]);

  useEffect(() => {
    if(query !== "") {
      handleSearch();
    } else {
      setMovieResults([]);
    }
  }, [query]);


  // FUNCTIONS AND LOGIC
  const handleSearch = async (e) => {
  
  // e.preventDefault();
  // setQuery(e.target.value);

  const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&page=1&include_adult=false&query=${query}`);

  const data = await response.json();

  data && !!data.results.length && setMovieResults(data.results);

  // console.log(data.errors)

  // check if there are some data contained into the json returned by the API
  // if (!!data.errors) {
  //   setMovieResults([]);
  //   setErrorMessage(data.errors)
  // } else if (data.results) {
  //   setMovieResults(data.results);
  // }
      
};


console.log('THIS IS MOVIE RESULTS FROM BODY', movieResults);


console.log('THIS IS QUERY FROM BODY', query);
  
  
    return (
    <div>
        <Header setQuery={setQuery}/>
        <HomePage movieResults={movieResults} displayResults={!!movieResults.length && query !== ""}/>
        {/*TO BE DEFINED ==> <SearchPage /> */}
        <Footer />
    </div>
  )
}

export default Body;