import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

import { register, reset } from '../redux/auth/provider/authSlice'
import './providerRegister.scss'

const ProviderRegister = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPass: '',
    phone: '',
    providerType: ''
  })

  const {
    firstName,
    lastName,
    email,
    password,
    confirmPass,
    phone,
    providerType
  } = formData

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.providerAuth
  )

  useEffect(() => {
    if (isError) {
      console.log(message)
      toast.error(message)
    }

    if (isSuccess || user) {
      navigate('/provider-dashboard/')
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
      firstName,
      lastName,
      email,
      password,
      phone,
      providerType
    }

    dispatch(register(providerData))
  }

  return (
    <div className="provider-register">
      <h1 className="provider-register__heading">Provider Registration</h1>
      <form className="provider-register__form" onSubmit={handleSubmit}>
        <fieldset>
          <label htmlFor="firstName" className="provider-register__label">
            First Name
          </label>
          <input
            className="provider-register__text-input"
            id="firstName"
            value={firstName}
            onChange={handleChange}
          />
        </fieldset>
        <fieldset>
          <label htmlFor="lastName" className="provider-register__label">
            Last Name
          </label>
          <input
            className="provider-register__text-input"
            id="lastName"
            value={lastName}
            onChange={handleChange}
          />
        </fieldset>
        <fieldset>
          <label htmlFor="email" className="provider-register__label">
            Email
          </label>
          <input
            className="provider-register__text-input"
            id="email"
            value={email}
            onChange={handleChange}
          />
        </fieldset>
        <fieldset>
          <label htmlFor="password" className="provider-register__label">
            Password
          </label>
          <input
            className="provider-register__text-input"
            id="password"
            value={password}
            onChange={handleChange}
          />
        </fieldset>
        <fieldset>
          <label htmlFor="confirmPass" className="provider-register__label">
            Confirm Password
          </label>
          <input
            className="provider-register__text-input"
            id="confirmPass"
            value={confirmPass}
            onChange={handleChange}
          />
        </fieldset>
        <fieldset>
          <label htmlFor="phone" className="provider-register__label">
            Phone Number
          </label>
          <input
            className="provider-register__text-input"
            id="phone"
            value={phone}
            onChange={handleChange}
          />
        </fieldset>
        <fieldset className="radio-btns">
          <legend>Provider Type</legend>
          <label htmlFor="crime">Crime</label>
          <input
            type="radio"
            id="providerType"
            name="providerType"
            value="crime"
            checked={providerType === 'crime'}
            onChange={handleChange}
          />
          <label htmlFor="health">Health</label>
          <input
            type="radio"
            id="providerType"
            name="providerType"
            value="health"
            checked={providerType === 'health'}
            onChange={handleChange}
          />
        </fieldset>
        <button type="submit">Register</button>
      </form>
    </div>
  )
}
export default ProviderRegister
