import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../redux/auth/authSlice'
import panicReducer from '../redux/panics/panicSlice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    panic: panicReducer
  }
})
