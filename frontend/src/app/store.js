import { configureStore } from '@reduxjs/toolkit'
import authReducr from '../features/auth/authSlice'

export const store = configureStore({
  reducer: {
    auth: authReducr,
  },
})
