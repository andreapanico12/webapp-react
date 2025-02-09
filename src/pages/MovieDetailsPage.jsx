import { useParams } from "react-router-dom";
import { useGlobalContext } from "../context/GlobalContext";
import { useEffect } from "react";
import Rating from "../components/Rating";
import ReviewCard from "../components/ReviewCard";
import { Link } from "react-router-dom";

const MovieDetailsPage = () => {

  const {id} = useParams();
  const {movie,fetchSingleMovie} = useGlobalContext()

  const renderReviews = () => {
    return movie.reviews.map(item => <ReviewCard key={item.id} review={item}/>)
  }

  useEffect(() =>fetchSingleMovie(id), [])

  return (
    <div className="container mt-5">
    <div className="row justify-content-center">
      <div className="col-md-4">
        <h1 className="text-warning">{movie.title}</h1>
        <ul className="list-group list-group-flush">
          <li className="list-group-item"><strong>Director:</strong> {movie.director}</li>
          <li className="list-group-item"><strong>Genre:</strong> {movie.genre}</li>
          <li className="list-group-item"><strong>Abstract:</strong> {movie.abstract}</li>
          <li className="list-group-item"><strong>Rating:</strong> <Rating vote={movie.rating} /></li>
        </ul>

        <h4 className="mt-4 text-secondary">Reviews</h4>
          {movie.reviews && movie.reviews.length > 0 ? (
            renderReviews()
          ) : (
            <p className="text-muted">No reviews available.</p>
          )}
      </div>

      <div className="col-md-4">
        <img
          src={movie.image}
          alt={movie.title}
          className="img-fluid rounded movie-poster"
        />
        <Link to='/' className=" btn btn-danger my-2 px-4 border border-black">Back</Link>
      </div>
    </div>
  </div>
  )
}

export default MovieDetailsPage