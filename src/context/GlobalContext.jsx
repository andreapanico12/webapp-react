import { createContext, useState, useContext } from "react";
import axios from "axios";

const GlobalContext = createContext();

const GlobalProvider =({children}) => {

  
  const [movies, setMovies] = useState([])
  const [movie, setMovie] = useState([])
  const api_url = import.meta.env.VITE_API_URL;

  const fetchMovies = () =>{
    axios.get(api_url)
      .then(res => {
        setMovies(res.data)
        console.log(res.data);
        
      })
      .catch(err => console.log(err))
  } 

  const fetchSingleMovie = (id) =>{
    axios.get(`${api_url}/${id}`)
    .then(res=>{
      console.log(res.data);
      setMovie(res.data)
    })
    .catch(err => console.log(err));
  }

  const value = {
    fetchMovies,
    movies,
    setMovies,
    fetchSingleMovie,
    movie,
    setMovie
  }
 
  return(
    <GlobalContext.Provider value={value}>
      {children}
    </GlobalContext.Provider>
  )
}

const useGlobalContext = () =>{
  return useContext(GlobalContext)
}

export{
  GlobalProvider,
  useGlobalContext
}