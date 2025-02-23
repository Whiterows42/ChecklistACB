import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './components/slices/CheckListSlice'
export const store = configureStore({
  reducer: {
    counter: counterReducer
  },
})