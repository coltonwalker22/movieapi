import React from 'react';
// import {MovieContext} from '../movieContextProvider';
import SearchedComponent from '../components/SearchedComponent';

function Searched(props) {
    const {filteredData} = props
    // const {searchMovies, setSearchMovies} = useContext;


  return (
    <div>
        {
            filteredData.map((item) => {
                return(
                    <SearchedComponent {...item} key={item.id}/>
                )
            })
        }   
    </div>
  )
}

export default Searched