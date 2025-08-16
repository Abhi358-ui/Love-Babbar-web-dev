import { configureStore, createSlice } from '@reduxjs/toolkit'
import { counterSlice } from '../feature/counter/createSlice'
import counterReducer from '../feature/counter/createSlice'

export const store = configureStore({
  reducer: {
   counter:counterReducer
  },
})