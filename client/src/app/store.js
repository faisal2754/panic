import { configureStore } from '@reduxjs/toolkit'
import clientAuthReducer from '../redux/auth/client/authSlice'
import providerAuthReducer from '../redux/auth/provider/authSlice'
import panicReducer from '../redux/panics/panicSlice'

export const store = configureStore({
  reducer: {
    clientAuth: clientAuthReducer,
    providerAuth: providerAuthReducer,
    panics: panicReducer
  }
})
