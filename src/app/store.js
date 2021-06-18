import { configureStore } from '@reduxjs/toolkit'
import labelReducer from '../features/counterSlice'
import toggleReducer from '../features/toggleSlice'

export const store = configureStore({
  reducer: {
    label: labelReducer,
    toggle: toggleReducer,
  },
})
