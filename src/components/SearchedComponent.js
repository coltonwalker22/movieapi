import React from 'react'

function SearchedComponent(props) {
    const {title, poster_path} = props
  return (
    <div className="nowPlaying-component">
              <img 
        src={`https://image.tmdb.org/t/p/w500${poster_path}`}
        width="150"
        alt=""
        />
        <div className="nowPlaying-title">{title}</div>

    </div>
  )
  }
export default SearchedComponent