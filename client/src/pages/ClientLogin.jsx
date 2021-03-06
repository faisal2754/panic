import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { login, reset } from '../redux/auth/client/authSlice'
import './clientLogin.scss'

const ClientLogin = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  const { email, password } = formData

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.clientAuth
  )

  useEffect(() => {
    if (isError) {
      toast.error(message)
    }

    if (isSuccess || user) {
      navigate('/client-dashboard')
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

    const clientData = {
      email,
      password
    }

    dispatch(login(clientData))
  }

  return (
    <div className="client-login">
      <h1 className="client-login__heading">Client Login</h1>
      <form className="client-login__form" onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input id="email" value={email} onChange={handleChange} />
        <label htmlFor="password">Password</label>
        <input id="password" value={password} onChange={handleChange} />
        <button type="submit">Login</button>
      </form>
      <div className="client-login__register">
        Don't have an account? <Link to="/client-register">Register Here</Link>
      </div>
      <div className="client-login__provider">
        Are you a provider? <Link to="/provider-login">Login Here</Link>
      </div>
    </div>
  )
}
export default ClientLogin
