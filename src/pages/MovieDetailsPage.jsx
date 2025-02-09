import { useParams } from "react-router-dom"

const MovieDetailsPage = () => {

  const {id} = useParams();

  return (
    <div>
      Movie {id} Details and Reviews page
    </div>
  )
}

export default MovieDetailsPage