import { Link } from 'react-router-dom'
import './navbar.scss'

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar__container">
        <div className="navbar__logo">
          <Link to="/">
            <img src="./img/logo.png" alt="logo" />
          </Link>
        </div>
        <div className="navbar__auth">
          <Link to="/start">
            <button>Login</button>
          </Link>
        </div>
      </div>
    </div>
  )
}
export default Navbar
