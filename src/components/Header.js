import React, { useState, useContext, useEffect} from 'react';
import {Link} from 'react-router-dom';
import {MovieContext} from '../movieContextProvider';
import {useNavigate} from 'react-router-dom'
import axios from 'axios';


function Header(props) {

  // let navigate = useNavigate();

  // const {searchMovies, setSearchMovies, /*getSearchedMovies*/ topMovies} = useContext(MovieContext);

// const [APIData, setAPIData] = useState([]);
//   const [filteredResults, setFilteredResults] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

  const [searchField , setSearchField] = useState('');



  // useEffect(() => {
  //   getSearchedMovies();
  // }, [])

  function getSearchedMovies(searchInput){
    return axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_MOVIEDB}&region=US&query=${searchInput}`)
    .then( ({data: {results}}) => setSearchResults(results))
    .catch(err => console.log(err))
}

function handleInput(e){
  setSearchField(e.target.value);
  getSearchedMovies(e.target.value)
    .then(() => console.log(searchResults))
  
}



// const searchItems = (searchValue) => {
//   setSearchInput(searchValue)
//   if(searchInput !== '') {
//     const filteredData = APIData.filter((item) => {
//       return Object.values(item).join('').toLowerCase().includes(searchInput.toLowerCase())
//     })
//     setFilteredResults(filteredData)
//   }
//   else{
//     setFilteredResults(APIData)
//   }
// }






  return (
  <div className="header-container">
    <h1> MOVIES FTW</h1>
    <div className="search-container">
      <input  value={searchField} onInput={handleInput}/>
        <div className="search-results" style={{display: searchField ? 'initial' : 'none'}}>
          <ul>{searchResults.slice(0,5).map(result =>
            <li>
              <Link to={`/movie/:${result.id}`}>{result.title}</Link>
            </li>
        )}</ul>
      </div>
  </div>
</div>
  )
}

export default Header



