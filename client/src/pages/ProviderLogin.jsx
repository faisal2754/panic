import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { login, reset } from '../redux/auth/provider/authSlice'
import './providerLogin.scss'

const ProviderLogin = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  const { email, password } = formData

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.providerAuth
  )

  useEffect(() => {
    if (isError) {
      toast.error(message)
    }

    if (isSuccess || user) {
      navigate('/provider-dashboard')
    }

    dispatch(reset())
  }, [user, isError, isSuccess, message, navigate, dispatch])

  const handleChange = (e) => {
    setFormData((oldData) => ({
      ...oldData,
      [e.target.id]: e.target.value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const providerData = {
      email,
      password
    }

    dispatch(login(providerData))
  }

  return (
    <div className="provider-login">
      <h1 className="provider-login__heading">Provider Login</h1>
      <form className="provider-login__form" onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input id="email" value={email} onChange={handleChange} />
        <label htmlFor="password">Password</label>
        <input id="password" value={password} onChange={handleChange} />
        <button type="submit">Login</button>
      </form>
      <div className="provider-login__register">
        Don't have an account?{' '}
        <Link to="/provider-register">Register Here</Link>
      </div>
      <div className="provider-login__client">
        Are you a client? <Link to="/client-login">Login Here</Link>
      </div>
    </div>
  )
}

export default ProviderLogin
