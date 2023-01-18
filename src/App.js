import React from 'react';
import { useEffect,useState } from 'react';

import './App.css';
import SearchIcon from './search.svg';
import MovieCard from './MovieCard';


const API_URL = 'http://www.omdbapi.com?apikey=63329eb8';
const App = () => {
    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] =useState([]);

    const searchMovies = async (title) => {
        const response = await fetch (`${API_URL}&s=${title}`);
        const data = await response.json();
        setMovies(data.Search);
    }
useEffect(()=>{
    searchMovies('Fast and Furious');
}, []);
//If Enter key is pressed, search for movie entered
// (if (event.key==='Enter')
// {
//     onKeyDown={() => searchMovies(searchTerm)};
// })
    return (

        <>
        <div className='app'>
            <h1>MovieLand</h1>
        </div><div className='search'>
                <input
                    placeholder='Search for movies'
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value) }
                    onKeyDown={()=> searchMovies(searchTerm)}
                   />
                <img
                    src={SearchIcon}
                    alt='search'
                    onClick={() => searchMovies(searchTerm) } />
                <div />
                
            </div>
            {
                movies?.length > 0
                ? (<div className='container'>
                {movies.map((movie) => (
                    <MovieCard movie = {movie}/>
                ))}
            </div>) :
            (
                <div className='empty'>
                    <h2>No movies found</h2>
                </div>
            )
            }
            
            </>
    )
}

export default App;