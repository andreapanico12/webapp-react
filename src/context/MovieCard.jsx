

function MovieCard({movieData}) {
  const {id,title,genre,abstract,image,rating} = movieData;

  return (
    <>
      <div className="card my-5" style={{width: "20rem", height:"600px"}}>
        <img src={image} className="card-img-top movie-image" alt={title}/>
          <div className="card-body">
           <h5 className="card-title">{title}</h5>
           <p className="card-text">Genre: {genre}</p>
           <p className="card-text">Rate: {rating}/5</p>
           <a href="#" className="btn btn-primary">Go somewhere</a>
          </div>
       </div>
    </>
  )
}

export default MovieCard