import { useEffect } from 'react'
import { useSelector } from 'react-redux'

import { Link, useNavigate } from 'react-router-dom'
import './hero.scss'

const Hero = () => {
  const navigate = useNavigate()
  const { user: client } = useSelector((state) => state.clientAuth)
  const { user: provider } = useSelector((state) => state.providerAuth)

  useEffect(() => {
    if (client) {
      navigate('/client-dashboard')
    }
  }, [])

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
