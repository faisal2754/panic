import { Link } from 'react-router-dom'
import { MdPermIdentity, MdHealthAndSafety } from 'react-icons/md'
import './start.scss'

const Start = () => {
  return (
    <div className="start">
      <div className="start__client">
        <div className="start__text">
          <div className="start__tag-line">Need Help?</div>
          <div className="start__main-line">Start as a Client</div>
        </div>
        <div className="start__icon">
          <MdPermIdentity size="110px" />
        </div>
        <div className="start__register">
          <Link to="/client-register">
            <button>Register</button>
          </Link>
        </div>
      </div>
      <div className="start__provider">
        <div className="start__text">
          <div className="start__tag-line">Can You Help?</div>
          <div className="start__main-line">Start as a Provider</div>
        </div>
        <div className="start__icon">
          <MdHealthAndSafety size="110px" />
        </div>
        <div className="start__register">
          <Link to="/provider-register">
            <button>Register</button>
          </Link>
        </div>
      </div>
    </div>
  )
}
export default Start
