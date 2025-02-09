import Rating from "./Rating"

function ReviewCard({review}) {
  return (
    <div className="card mb-3">
    <div className="card-body">
      <h5 className="card-title text-primary">{review.name}</h5>
      <Rating vote={review.vote} />
      <p className="card-text">{review.text}</p>
    </div>
  </div>
  )
}

export default ReviewCard