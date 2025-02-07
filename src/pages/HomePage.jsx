import { useGlobalContext } from "../context/GlobalContext"
import { useEffect } from "react";



function HomePage() {
  
  const {fetchMovies} = useGlobalContext();

  useEffect(fetchMovies,[])
  return (
    <div>
      HomePage
    </div>
  )
}

export default HomePage