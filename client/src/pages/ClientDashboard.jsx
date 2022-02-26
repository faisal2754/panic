import { useDispatch, useSelector } from 'react-redux'
import { GiAmbulance, GiPoliceCar } from 'react-icons/gi'
import { createPanic } from '../redux/panics/panicSlice'
import './clientDashboard.scss'

const ClientDashboard = () => {
  const dispatch = useDispatch()

  const panicCrimeData = {
    location: 'home',
    requiredProviderType: 'crime'
  }
  const panicHealthData = {
    location: 'home',
    requiredProviderType: 'health'
  }

  const { isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.panic
  )

  const handleCrimePanic = () => {
    dispatch(createPanic(panicCrimeData))
  }

  const handleHealthPanic = () => {
    dispatch(createPanic(panicHealthData))
  }

  navigator.geolocation.getCurrentPosition((pos) => console.log(pos))

  return (
    <div className="dashboard">
      <div className="dashboard__crime">
        <h1 className="dashboard__crime-heading">Report Crime Panic</h1>
        <div className="dashboard__crime-icon">
          <GiPoliceCar size="120px" />
        </div>
        <button onClick={handleCrimePanic}>Panic!</button>
      </div>
      <div className="dashboard__health">
        <h1 className="dashboard__health-heading">Report Health Panic</h1>
        <div className="dashboard__health-icon">
          <GiAmbulance size="120px" />
        </div>
        <button onClick={handleHealthPanic}>Panic!</button>
      </div>
    </div>
  )
}
export default ClientDashboard
