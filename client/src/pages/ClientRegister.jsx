import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

import { register, reset } from '../redux/auth/client/authSlice'
import './clientRegister.scss'

const ClientRegister = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPass: '',
    phone: '',
    emergencyContact: ''
  })

  const {
    firstName,
    lastName,
    email,
    password,
    confirmPass,
    phone,
    emergencyContact
  } = formData

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.clientAuth
  )

  useEffect(() => {
    if (isError) {
      toast.error(message)
    }

    if (isSuccess || user) {
      navigate('/')
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
      firstName,
      lastName,
      email,
      password,
      phone,
      emergencyContact
    }

    dispatch(register(clientData))
  }

  return (
    <div className="client-register">
      <h1 className="client-register__heading">Client Registration</h1>
      <form className="client-register__form" onSubmit={handleSubmit}>
        <label htmlFor="firstName">First Name</label>
        <input id="firstName" value={firstName} onChange={handleChange} />
        <label htmlFor="lastName">Last Name</label>
        <input id="lastName" value={lastName} onChange={handleChange} />
        <label htmlFor="email">Email</label>
        <input id="email" value={email} onChange={handleChange} />
        <label htmlFor="password">Password</label>
        <input id="password" value={password} onChange={handleChange} />
        <label htmlFor="confirmPass">Confirm Password</label>
        <input id="confirmPass" value={confirmPass} onChange={handleChange} />
        <label htmlFor="phone">Phone Number</label>
        <input id="phone" value={phone} onChange={handleChange} />
        <label htmlFor="emergencyContact">Emergency Contact Number</label>
        <input
          id="emergencyContact"
          value={emergencyContact}
          onChange={handleChange}
        />
        <button type="submit">Register</button>
      </form>
    </div>
  )
}
export default ClientRegister
