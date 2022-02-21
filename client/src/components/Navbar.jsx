import './navbar.scss'

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar__container">
        <div className="navbar__logo">
          <img src="./img/logo.png" alt="logo" />
        </div>
        <div className="navbar__auth">
          <button>Login</button>
        </div>
      </div>
    </div>
  )
}
export default Navbar
