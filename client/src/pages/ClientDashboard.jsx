import { useDispatch, useSelector } from 'react-redux'
import { GiAmbulance, GiPoliceCar } from 'react-icons/gi'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

import './clientDashboard.scss'
import { useEffect } from 'react'
import { createPanic } from '../redux/panics/panicSlice'

const ClientDashboard = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const panicCrimeData = {
    locationLat: 2,
    locationLong: 3,
    requiredProviderType: 'crime'
  }

  const panicHealthData = {
    locationLat: 2,
    locationLong: 3,
    requiredProviderType: 'health'
  }

  const { isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.panics
  )

  const { user } = useSelector((state) => state.clientAuth)

  useEffect(() => {
    if (!user) {
      navigate('/')
    }
  }, [])

  useEffect(() => {
    if (isSuccess) {
      toast('Your panic has been recorded. We will be in touch soon!')
    }
  }, [isSuccess])

  const handleCrimePanic = () => {
    navigator.geolocation.getCurrentPosition((pos) => {
      panicCrimeData['locationLat'] = pos.coords.latitude
      panicCrimeData['locationLong'] = pos.coords.longitude
      dispatch(createPanic(panicCrimeData))
    })
  }

  const handleHealthPanic = () => {
    navigator.geolocation.getCurrentPosition((pos) => {
      panicHealthData['locationLat'] = pos.coords.latitude
      panicHealthData['locationLong'] = pos.coords.longitude
      dispatch(createPanic(panicHealthData))
    })
  }

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
