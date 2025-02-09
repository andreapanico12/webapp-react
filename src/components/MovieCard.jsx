import Rating from "./Rating";
import { Link } from "react-router-dom";

function MovieCard({movieData}) {
  const {id,title,genre,abstract,image,rating} = movieData;

  return (
    <>
      <div className="card my-5" style={{width: "20rem", height:"600px"}}>
        <img src={image} className="card-img-top movie-image" alt={title}/>
          <div className="card-body">
           <h5 className="card-title">{title}</h5>
           <p className="card-text">Genre: {genre}</p>
           {rating && <Rating vote={rating}/>}
           <Link to={`movies/${id}`} className="btn btn-primary">Show Reviews</Link>
          </div>
       </div>
    </>
  )
}

export default MovieCard