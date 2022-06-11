import React, {useState} from 'react';
import axios from 'axios';


const MovieContext = React.createContext();

function MovieContextProvider(props){
    
    const [searchMovies, setSearchMovies] = useState([]);

    const [topMovies, setTopMovies] = useState([]);

    const [popMovies, setPopMovies] = useState([]);

    const [nowPlaying, setNowPlaying] = useState([]);

    // console.log(process.env)
    function getPopMovies(){
       return axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_MOVIEDB}&region=US`)
            .then( ({data: {results}}) => setPopMovies(results))
            .catch(err => console.log(err))
    }

    function getNowPlaying(){
        return axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_MOVIEDB}&region=US`)
        .then( ({data: {results}}) => setNowPlaying(results))
        .catch(err => console.log(err))

    }

    function getTopMovies(){
        return axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_MOVIEDB}&region=US`)
        .then( ({data: {results}}) => setTopMovies(results))
        .catch(err => console.log(err))
    }

    // function getSearchedMovies(){
    //     return axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_MOVIEDB}&region=US&query=Batman`)
    //     .then( ({data: {results}}) => setSearchMovies(results))
    //     .catch(err => console.log(err))
    // }

    return (
        <MovieContext.Provider value={{
         searchMovies,
         topMovies,
         popMovies,
         nowPlaying,
         setSearchMovies,
         setTopMovies,
         setPopMovies,
         setNowPlaying,
         getPopMovies,
         getNowPlaying,
         getTopMovies,
        //  getSearchedMovies
         }}>
        {props.children}
         </MovieContext.Provider>

    )

}

export {MovieContextProvider, MovieContext}

