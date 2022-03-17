import React, {useState, useEffect} from 'react';
import './App.css';

function App() {
  
    // STATES
    const [movie, setMovie] = useState([]);

    const [searchTerm, setSearchTerm] = useState('')

    
    // FUNCTIONS AND FECTHING
    const apiKey = process.env.REACT_APP_API  // extract Adrien's API key saved into the .env file 

    const loadMovie = async (e) => {
        e.preventDefault();

        const response = await fetch(`https://api.themoviedb.org/3/movie/550?api_key=${apiKey}=${searchTerm}`);
        const data = await response.json();

        console.log(data);

        data && setMovie({movie: [...data]});  // data.results ?
    }

    
    const handleChange = (e) => {
        setSearchTerm(searchTerm)
    }
    
    
    
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header">Dissolvd</div>
                        <SearchArea loadMovie={loadMovie} handleChange={handleChange}/>
                        <div className="card-body">A better way to watch movies!</div>
                    </div>
                </div>
            </div>
        </div>
    );
  
  
  
  
}

export default App;