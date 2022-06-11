import React from 'react';
import {Link} from 'react-router-dom';

function TopMoviePageComponent(props) {
    const {title, poster_path, id} = props
  return (
    <div className="TopMovie-page-component">
    <img 
    src={`https://image.tmdb.org/t/p/w500${poster_path}`}
    width="150"
    alt=""
    />
    <div></div>
    <Link to={`/movie/:${id}`}>{title}</Link>
</div>
  )
}

export default TopMoviePageComponent