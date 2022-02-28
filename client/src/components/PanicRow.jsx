import axios from 'axios'
import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { toast } from 'react-toastify'

import { updatePanic } from '../redux/panics/panicSlice'

import './panicRow.scss'

const PanicRow = ({
  id,
  locationLat,
  locationLong,
  time,
  status,
  firstName,
  lastName,
  phone
}) => {
  const [location, setLocation] = useState('')
  const dispatch = useDispatch()

  useEffect(() => {
    axios
      .get(
        `https://maps.googleapis.com/maps/api/geocode/json?latlng=${locationLat},${locationLong}&key=AIzaSyAIlLhgxaSoq2AFHJXZHQ33Wh2TMXCOYq8`
      )
      .then((res) => {
        console.log(res)
        setLocation(res.data.results[0].formatted_address)
      })
  }, [location])

  const handlePanicUpdate = async () => {
    if (status === 'RESOLVED') {
      return toast('Panic already handled')
    }

    let updatedStatus = ''
    if (status === 'UNATTENDED') {
      updatedStatus = 'PENDING'
    } else {
      updatedStatus = 'RESOLVED'
    }
    const panicUpdateData = {
      panicId: id,
      status: updatedStatus
    }

    dispatch(updatePanic(panicUpdateData))
  }

  return (
    <tr className="panic-row">
      <td>{new Date(time).toLocaleString()}</td>
      <td>{location}</td>
      <td>
        {firstName} {lastName}
      </td>
      <td>{phone}</td>
      <td>{status}</td>
      <td>
        <button onClick={handlePanicUpdate}>
          {status === 'UNATTENDED'
            ? 'Attend'
            : status === 'PENDING'
            ? 'Resolve'
            : 'Complete'}
        </button>
      </td>
    </tr>
  )
}
export default PanicRow
