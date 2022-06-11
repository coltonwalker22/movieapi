import React from 'react'
import {Link} from 'react-router-dom';

function NowPlaying(props) {
    const {title, poster_path, id} = props
  return (
    <div className="nowPlaying-component">
              <img 
        src={`https://image.tmdb.org/t/p/w500${poster_path}`}
        width='150px'
        alt=""
        />
        <div></div>
        <Link to={`/movie/:${id}`} className="nowPlaying-title">{title}</Link>

    </div>
  )
}

export default NowPlaying;