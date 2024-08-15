import {useEffect, useState} from 'react'
import SearchIcon from './search.svg'
import MovieCard from './MovieCard'
import './App.css';

const API_URL='http://www.omdbapi.com?apikey=32fcc9c2';

const movie1 = {
  "Title": "Extraction II",
  "Year": "2023",
  "imdbID": "tt12263384",
  "Type": "movie",
  "Poster": "https://m.media-amazon.com/images/M/MV5BZjg5MTM4N2QtN2RlMS00NzBlLTg3NDktM2ExZDNmMmExMGU3XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg"
}

const App =()=>{

  const [movies, setMovies] = useState([]);

  const [searchTerm, setSearchTerm] = useState('');

  const searchMovies = async(title) =>{

    const response = await fetch(`${API_URL}&s=${title}`)

    const data = await response.json();

    setMovies(data.Search)
  }

  useEffect(() =>{

    searchMovies('katt williams')

  }, []);

  return(
    
    <div className='app'>

      <h1>Movie Empire</h1>

      <div className='search'>

        <input 
          placeholder='search for movies'
          value= {searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <img 
          src={SearchIcon}
          alt='search'
          onClick={() =>{searchMovies(searchTerm)}}
        />
      </div>

      {
        movies?.length > 0 
        ?(
          <div className='container'>

            {
              movies.map((movie) =>(
                <MovieCard movie={movie}/>
              ))
            }
          
        </div>
        ) : (
          <div className='empty'>
            <h2>No movies available</h2>
          </div>
        )

      }

    </div>
  );
}
export default App;
