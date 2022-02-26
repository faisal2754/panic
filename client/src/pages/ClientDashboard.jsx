import { useDispatch } from 'react-redux'
import { createPanic } from '../redux/panics/panicSlice'
import './clientDashboard.scss'

const ClientDashboard = () => {
  const dispatch = useDispatch()

  const panicData = {
    location: 'home',
    requiredProviderType: 'crime'
  }

  const handleCrimePanic = () => {
    dispatch(createPanic(panicData))
  }

  return (
    <div className="dashboard">
      <div className="dashboard__crime">
        <button onClick={handleCrimePanic}>Panic</button>
      </div>
      <div className="dashboard__health">
        <button>Panic</button>
      </div>
    </div>
  )
}
export default ClientDashboard
