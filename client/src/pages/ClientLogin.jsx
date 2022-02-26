import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { login, reset } from '../redux/auth/authSlice'
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
    (state) => state.auth
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
      <h1 className="client-login__heading">Client Registration</h1>
      <form className="client-login__form" onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input id="email" value={email} onChange={handleChange} />
        <label htmlFor="password">Password</label>
        <input id="password" value={password} onChange={handleChange} />
        <button type="submit">Login</button>
      </form>
    </div>
  )
}
export default ClientLogin
