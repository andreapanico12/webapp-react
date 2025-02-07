import { Link } from "react-router-dom"

function Header() {
  return (
    <header>
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand" to='/'>CINEPHILE</Link>
        </div>

      </nav>

    </header>
  )
}

export default Header