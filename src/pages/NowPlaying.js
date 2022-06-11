import React, {useContext, useEffect} from 'react';
import {MovieContext} from '../movieContextProvider';
import { useNavigate } from 'react-router-dom';

import NowPlayingPageComponent from '../PageComponents/NowPlayingPageComponent'

function NowPlaying() {
    let navigate = useNavigate();

    const {nowPlaying, getNowPlaying} = useContext(MovieContext);
    
    useEffect(() => {
        getNowPlaying();
    }, [])

  return (
      <>
      <div className="nowPlaying-page-title">NOW PLAYING</div>
    <div className="NowPlaying-page-container">
    {nowPlaying.map(pm => <NowPlayingPageComponent {...pm} key={pm.id}
        />
        )}
      {/* <button onClick={() => {navigate("/")
      }}> return to page</button> */}
    </div>
    </>
  )
}

export default NowPlaying