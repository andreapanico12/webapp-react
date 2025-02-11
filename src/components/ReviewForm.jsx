import axios from "axios";
import { useState } from "react"

function ReviewForm({movie_id, setMovie, fetchSingleMovie}) {

  const api_url = `${import.meta.env.VITE_API_URL}/${movie_id}/reviews`

  const defaultReviewData = {
    name: "",
    vote: "",
    text: ""
  }

  const [review, setReview] = useState(defaultReviewData);


  const handleChange = (e) =>{
    setReview({...review, [e.target.name]: e.target.value})

  }

  const handleSubmit = (e) =>{
    e.preventDefault();

    if (!review.name.trim()) return alert("Name is required.");
    if (!review.vote) return alert("Please select a rating.");
    if (!review.text.trim()) return alert("Review text cannot be empty.");
    if (review.vote < 1 || review.vote > 5) return alert("Rating must be between 1 and 5.");


    axios.post(api_url,review,{headers: {"Content-Type": 'application/json'}})
    .then(res =>{
      console.log(res.data)
      
    })

    setMovie(prevMovie =>({
      ...prevMovie,
      reviews: [...prevMovie.reviews,review]
    }))

    setReview(defaultReviewData)

    fetchSingleMovie(movie_id)


    .catch(err => {
      console.log(err)
    })
  }



  return (

    <div className="card shadow-sm mt-4">
      <div className="card-body">
        <h4 className="card-title text-secondary">Review Movie</h4>
        <form onSubmit={handleSubmit}>

          <div className="mb-3">
            <label className="form-label">Your Name</label>
            <input
              type="text"
              name="name"
              value={review.name}
              onChange={handleChange}
              className="form-control"
              placeholder="Enter your name"
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Your Rating</label>
            <select
              name="vote"
              value={review.vote}
              onChange={handleChange}
              className="form-select"
              required
            >
              <option value="">Select a rating</option>
              <option value="1">⭐ (1 - Poor)</option>
              <option value="2">⭐⭐ (2 - Fair)</option>
              <option value="3">⭐⭐⭐ (3 - Good)</option>
              <option value="4">⭐⭐⭐⭐ (4 - Very Good)</option>
              <option value="5">⭐⭐⭐⭐⭐ (5 - Excellent)</option>
            </select>
          </div>

          <div className="mb-3">
            <label className="form-label">Your Review</label>
            <textarea
              name="text"
              value={review.text}
              onChange={handleChange}
              className="form-control"
              rows="3"
              placeholder="Write your review here..."
              required
            ></textarea>
          </div>

          <button type="submit" className="btn btn-primary">
            Insert Review
          </button>
        </form>
      </div>
    </div>
  )
}

export default ReviewForm