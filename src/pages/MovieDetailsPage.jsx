import { useParams } from "react-router-dom";
import { useGlobalContext } from "../context/GlobalContext";
import { useEffect } from "react";
import Rating from "../components/Rating";

const MovieDetailsPage = () => {

  const {id} = useParams();
  const {movie,fetchSingleMovie} = useGlobalContext()

  useEffect(() =>fetchSingleMovie(id), [])

  return (
    <div className="container mt-5">
    <div className="row align-items-center justify-content-center">
      <div className="col-md-4">
        <h1 className="text-warning">{movie.title}</h1>
        <ul className="list-group list-group-flush">
          <li className="list-group-item"><strong>Director:</strong> {movie.director}</li>
          <li className="list-group-item"><strong>Genre:</strong> {movie.genre}</li>
          <li className="list-group-item"><strong>Abstract:</strong> {movie.abstract}</li>
          <li className="list-group-item"><strong>Rating:</strong> <Rating vote={movie.rating} /></li>
        </ul>
      </div>

      <div className="col-md-4 text-center">
        <img
          src={movie.image}
          alt={movie.title}
          className="img-fluid rounded movie-poster"
        />
      </div>
    </div>
  </div>
  )
}

export default MovieDetailsPage