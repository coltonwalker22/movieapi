import React, {useContext, useEffect} from 'react';
import {MovieContext} from '../movieContextProvider';
import { useNavigate } from 'react-router-dom';

import TopMoviePageComponent from '../PageComponents/TopMoviePageComponent';



function TopMovies() {
    let navigate = useNavigate();

    const {getTopMovies, topMovies} = useContext(MovieContext);
    
    useEffect(() => {
        getTopMovies();
    }, [])

  return (
      <>
      <div className="topMovies-page-title">TOP MOVIES</div>
      <div className="TopMovies-page-container">
    {topMovies.map(pm => <TopMoviePageComponent {...pm} key={pm.id}
        />
        )}
      {/* <button onClick={() => {navigate("/")
      }}> return to page</button> */}
      </div>
    </>
  )
}

export default TopMovies