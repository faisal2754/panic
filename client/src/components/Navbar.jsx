import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { logout as clientLogout } from '../redux/auth/client/authSlice'
import { logout as providerLogout } from '../redux/auth/provider/authSlice'

import './navbar.scss'

const Navbar = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { user: client } = useSelector((state) => state.clientAuth)
  const { user: provider } = useSelector((state) => state.providerAuth)

  const handleClientLogout = () => {
    dispatch(clientLogout())
  }

  const handleProviderLogout = () => {
    dispatch(providerLogout())
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
          {client ? (
            <button onClick={handleClientLogout}>Logout</button>
          ) : provider ? (
            <button onClick={handleProviderLogout}>Logout</button>
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
