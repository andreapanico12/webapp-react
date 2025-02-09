import { useParams } from "react-router-dom";
import { useGlobalContext } from "../context/GlobalContext";
import { useEffect } from "react";

const MovieDetailsPage = () => {

  const {id} = useParams();
  const {movie,fetchSingleMovie} = useGlobalContext()

  useEffect(() =>fetchSingleMovie(id), [])

  return (
    <div>
      Movie {movie.title} Details and Reviews page
    </div>
  )
}

export default MovieDetailsPage