import { Link } from "react-router-dom"

function Header() {
  return (
    <header>
      <nav className="navbar bg-secondary">
        <div className="container-fluid">
          <Link className="navbar-brand text-danger nav-title bg-warning p-3 border border-dark rounded-4" to='/'>CINEPHILE</Link>
          <Link className="btn btn-warning text-black mx-5 border-black" to='/movies/add'>Add New Movie</Link>
        </div>

      </nav>

    </header>
  )
}

export default Header