import axios from 'axios'

const API_URL = 'http://localhost:5000/panic/'

const createPanic = async (panicData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }

  const response = await axios.post(API_URL + 'create', panicData, config)

  return response.data
}

const panicService = {
  createPanic
}

export default panicService
