import './clientRegister.scss'

const ClientRegister = () => {
  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <div className="client-register">
      <div className="client-register__container">
        <h1 className="client-register__heading">Client Registration</h1>
        <form className="client-register__form" onSubmit={handleSubmit}>
          <label htmlFor="">First Name</label>
          <input id="first-name" />
          <label htmlFor="">Last Name</label>
          <input id="last-name" />
          <label htmlFor="">Email</label>
          <input id="email" />
          <label htmlFor="">Password</label>
          <input id="confirm-pass" />
          <label htmlFor="">Confirm Password</label>
          <input id="email" />
          <label htmlFor="">Phone Number</label>
          <input id="phone" />
          <label htmlFor="">Emergency Contact Number</label>
          <input id="emergency-phone" />
          <button type="submit">Register</button>
        </form>
      </div>
    </div>
  )
}
export default ClientRegister
