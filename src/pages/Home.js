import React, {useContext, useEffect} from 'react'
import {MovieContext} from '../movieContextProvider';
import {useNavigate} from 'react-router-dom';

import PopMoviesComponent from '../components/PopMoviesComponent'
import NowPlayingComponent from '../components/NowPlayingComponent'
import TopMoviesComponent from '../components/TopMoviesComponent'
import axios from 'axios';



function Home() {
    let navigate = useNavigate();

    const {popMovies, getPopMovies, nowPlaying, topMovies, getNowPlaying, getTopMovies, searchMovies, getSearchedMovies} = useContext(MovieContext);

    console.log("popMovies:",popMovies)
    console.log("nowPlaying:",nowPlaying)
    console.log("topMovies:", topMovies)
    console.log("searchMovies:", searchMovies)
    
    useEffect(() => {
        getPopMovies();
        axios.get(`https://api.themoviedb.org/3/movie/675353?api_key=${process.env.REACT_APP_MOVIEDB}&region=US`)
        .then(res => console.log("test:",res.data))
        .catch(err => console.log(err))
        getNowPlaying();
        getTopMovies();
        // getSearchedMovies();
    }, []);

  
    return (
        <>
        <div className="first-row-container">
            <div className="popular-container">
                <h1>POPULAR MOVIES</h1>
                {popMovies.slice(0,4).map(pm => <PopMoviesComponent {...pm} key={pm.id} />
                )}
                <button 
                onClick={() => {navigate("/popular")
                }} 
                >
                See More!</button> 
            </div>

            <div className="nowPlaying-container">
                <h1> NOW PLAYING</h1>
                {nowPlaying.slice(0,4).map(pm => <NowPlayingComponent {...pm} key={pm.id}
                />
                )}
                  <button 
                    className="nowPlaying-button"
                onClick={() => {navigate("/NowPlaying")
                }} 
                >
                See More!</button> 
            </div>

            <div className="topRated-container">
                <h1>TOP RATED</h1>
            {topMovies.slice(0,4).map(pm => <TopMoviesComponent {...pm} key={pm.id}
                />
                )}
                  <button 
                onClick={() => {navigate("/TopMovies")
                }} 
                >
                See More!</button> 
            </div>
        </div>
        </>
        
        

  )
}

export default Home



//TO DO
// Continue on having a search capability in the header.
