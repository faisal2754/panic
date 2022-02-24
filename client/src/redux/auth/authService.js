import axios from 'axios'

const API_URL = 'http://localhost:5000/user/'

const register = async (userData) => {
  const response = await axios.post(API_URL + 'register', userData)
  const resData = response.data

  if (resData) {
    localStorage.setItem('client', JSON.stringify(resData))
  }

  return resData
}

const login = async (userData) => {
  const response = await axios.post(API_URL + 'login', userData)
  const resData = response.data

  if (resData) {
    localStorage.setItem('client', JSON.stringify(resData))
  }

  return resData
}

const logout = () => {
  localStorage.removeItem('client')
}

const authService = {
  register,
  logout,
  login
}

export default authService
