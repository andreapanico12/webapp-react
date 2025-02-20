import HomePage from "./pages/HomePage"
import Error404 from "./pages/Error404"
import DefaultLayout from "./layouts/DefaultLayout"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { GlobalProvider } from "./context/GlobalContext"
import MovieDetailsPage from "./pages/MovieDetailsPage"
import NewMoviePage from "./pages/NewMoviePage"


function App() {


  return (
    <GlobalProvider>
    <BrowserRouter>
     <Routes>
      <Route element={<DefaultLayout/>}>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/movies/:id" element={<MovieDetailsPage/>}/>
        <Route path="/movies/add" element={<NewMoviePage/>}/>
        <Route path="*"element={<Error404/>}/>
      </Route>
     </Routes> 
    </BrowserRouter>
    </GlobalProvider>

  )
}

export default App
