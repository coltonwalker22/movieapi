import React, {useContext, useEffect} from 'react';
import {MovieContext} from '../movieContextProvider';
import { useNavigate } from 'react-router-dom';

import PopMoviePageComponent from '../PageComponents/PopMoviePageComponent';

function Popular() {
// console.log(props)
  // const {popMovies, getPopMovies, colors} = props;
  let navigate = useNavigate();
  const {popMovies, getPopMovies} = useContext(MovieContext);

  useEffect(() => {
    getPopMovies();
}, [])



  return (
  <>
  <div className="popMovies-page-title">POPULAR MOVIES</div>
    <div className="pop-page-container">
  {popMovies.map(pm => <PopMoviePageComponent {...pm} key={pm.id}
    />
    )}
    {/* <button onClick={() => {navigate("/")
      }}> return to page</button> */}
      </div>
  </>
  )
  
}

export default Popular