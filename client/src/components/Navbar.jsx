import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { logout, reset } from '../redux/auth/authSlice'

import './navbar.scss'

const Navbar = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  )

  const handleLogout = () => {
    dispatch(logout())
    navigate('/')
  }

  return (
    <div className="navbar">
      <div className="navbar__container">
        <div className="navbar__logo">
          <Link to="/">
            <img src="./img/logo.png" alt="logo" />
          </Link>
        </div>
        <div className="navbar__auth">
          {user ? (
            <button onClick={handleLogout}>Logout</button>
          ) : (
            <Link to="/client-login">
              <button>Login</button>
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}
export default Navbar
