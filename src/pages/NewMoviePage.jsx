import { useState } from "react"

function NewMoviePage() {

  const defaultMovieData = {}
  const [newMovie, setNewMovie] = useState(defaultMovieData)


  const handleOnChange = (e) =>{
    console.log(e.target);
    const {value,name} = e.target;
    setNewMovie((prev) => ({...prev, [name]: value}))
  }

  const handleOnSubmit = (e) =>{
    e.preventDefault();
    console.log(newMovie)

    setNewMovie(defaultMovieData)
  }

  return (
    <div className="card shadow-sm mt-4">
    <div className="card-body bg-secondary">
      <h3 className="card-title text-warning text-center fw-bold ">Add New Movie</h3>
      <form onSubmit={handleOnSubmit}>

       
        <div className="mb-3">
          <label className="form-label fw-bold text-warning">Title</label>
          <input
            type="text"
            name="title"
            value= {newMovie.title}
            onChange={handleOnChange}
            className="form-control bg-body-secondary"
            placeholder="Enter movie title"
            required
          />
        </div>

        
        <div className="mb-3">
          <label className="form-label fw-bold text-warning">Director</label>
          <input
            type="text"
            name="director"
            value={newMovie.director}
            onChange={handleOnChange}
            className="form-control bg-body-secondary"
            placeholder="Enter director's name"
            required
          />
        </div>

        
        <div className="mb-3">
          <label className="form-label fw-bold text-warning">Movie Poster</label>
          <input
            type="file"
            name="image"
            onChange={handleOnChange}
            className="form-control bg-body-secondary"
            required
          />
        </div>

      
        <div className="mb-3">
          <label className="form-label fw-bold text-warning">Abstract</label>
          <textarea
            name="abstract"
            value={newMovie.abstract}
            onChange={handleOnChange}
            className="form-control bg-body-secondary"
            rows="3"
            placeholder="Write a brief summary..."
            required
          ></textarea>
        </div>

      
        <button type="submit" className="btn btn-primary w-100">
          Add Movie
        </button>
      </form>
    </div>
  </div>
  )
}

export default NewMoviePage