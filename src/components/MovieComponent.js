import React from 'react'

function MovieComponent(props) {
    const {title, poster_path} = props
  return (
    <div className="popMovie-container">
    <img 
    src={`https://image.tmdb.org/t/p/w500${poster_path}`}
    width="150"
    alt=""
    />
    <div>{title}</div>
</div>
  )
}

export default MovieComponent