import { Link } from 'react-router-dom'
import './hero.scss'

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero__container">
        <div className="hero__text">Help at your fingertips.</div>
        <div className="hero__start">
          <Link to="/start">
            <button>Get Started &#8594;</button>
          </Link>
        </div>
      </div>
    </div>
  )
}
export default Hero
