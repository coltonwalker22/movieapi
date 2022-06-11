import {Link} from 'react-router-dom';
import Movie from '../pages/Movie'

function PopMovies(props) {
 

  const {title, poster_path, id} = props
    console.log("pop movies component props:", props)
  return (
    <div className="popMovie-component">
        <img 
        src={`https://image.tmdb.org/t/p/w500${poster_path}`}
        width="150px"
        alt=""
        />
        <div className="popMovie-title">
        <Link to={`/movie/:${id}`} >{title}</Link>
        </div>
        {/* <button onClick={() => {toComponent()}}> More Info</button> */}
    </div>
  )
}

export default PopMovies
