import React, {useContext, useEffect, useState} from 'react';
import {MovieContext} from '../movieContextProvider';
import {useParams} from 'react-router-dom'
import axios from 'axios';


function Movie() {
  let params = useParams();
  let movie_id = useParams();
  let {id} = useParams();
  let newId = id.slice(1)




    const [movie, setMovie] = useState([])


    useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/movie/${newId}?api_key=${process.env.REACT_APP_MOVIEDB}&region=US`)
      .then((res) => {
        if(res.data.id !== movie.id){
          setMovie(res.data)
        }})
      .catch(err => console.log(err))
    }, [newId]);
  

    // console.log("params:",params)
    console.log("newId:", newId)
    console.log("movie:",movie)
  // console.log("movie:",movie)
  // console.log("params:", params)
  // console.log("movie_id:", movie_id)
  // console.log("popMovies:",popMovies)
  // console.log("nowPlaying:",nowPlaying)
  // console.log("topMovies:", topMovies)
  // console.log("searchMovies:", searchMovies)
  
  return (
    <>
    <div className="Movie-container">
        <img 
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        width="300px"
        alt=""
        />
        <div>{movie.title}</div>
        <h4> Realse Date: {movie.release_date}</h4>
        <p>{movie.overview}</p>
        <h3>{`Budget: $ ${movie.budget}`}</h3>
        <h3>{`Revenue: $ ${movie.revenue}`}</h3>
        <a href={`${movie.homepage}`}>{movie.homepage}</a>
    </div>
    </>
  )
}

export default Movie