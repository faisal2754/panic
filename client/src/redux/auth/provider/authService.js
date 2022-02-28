import axios from 'axios'

const API_URL = 'http://localhost:5000/provider/'

const register = async (userData) => {
  const response = await axios.post(API_URL + 'register', userData)
  const resData = response.data

  if (resData) {
    localStorage.setItem('provider', JSON.stringify(resData))
  }

  return resData
}

const login = async (userData) => {
  const response = await axios.post(API_URL + 'login', userData)
  const resData = response.data

  if (resData) {
    localStorage.setItem('provider', JSON.stringify(resData))
  }

  return resData
}

const logout = () => {
  localStorage.removeItem('provider')
}

const authService = {
  register,
  logout,
  login
}

export default authService
