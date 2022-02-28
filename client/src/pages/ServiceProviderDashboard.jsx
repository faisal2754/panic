import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

import PanicRow from '../components/PanicRow'
import { getPanics } from '../redux/panics/panicSlice'
import './serviceProviderDashboard.scss'

const ServiceProviderDashboard = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { panics } = useSelector((state) => state.panics)
  const { user } = useSelector((state) => state.providerAuth)

  useEffect(() => {
    if (!user) {
      navigate('/')
    }
  }, [])

  useEffect(() => {
    dispatch(getPanics())
  }, [dispatch, panics])

  return (
    <div className="provider-dashboard">
      <h1>Incoming Panics</h1>
      <table cellSpacing="0" cellPadding="10rem">
        <thead>
          <tr>
            <th>Time</th>
            <th>Location</th>
            <th>Name</th>
            <th>Phone</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {panics.map((panic) => {
            return (
              <PanicRow
                key={panic.panic_id}
                id={panic.panic_id}
                time={panic.created_at}
                locationLat={panic.locationLat}
                locationLong={panic.locationLong}
                firstName={panic.user.first_name}
                lastName={panic.user.last_name}
                phone={panic.user.phone}
                status={panic.status}
              />
            )
          })}
        </tbody>
      </table>
    </div>
  )
}
export default ServiceProviderDashboard
