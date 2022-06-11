import React from 'react'
import {Link} from 'react-router-dom';

function TopMoviesComponent(props) {
    const {title, poster_path, id} = props
  return (
    <div className="topRated-component">
    <img 
    src={`https://image.tmdb.org/t/p/w500${poster_path}`}
    width="150"
    alt=""
    />
    <Link to={`/movie/:${id}`} className="topRated-title">{title}</Link>
</div>
  )
}

export default TopMoviesComponent