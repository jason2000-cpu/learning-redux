// import { Action, ThunkAction } from "@reduxjs/toolkit"
import { combineSlices, configureStore } from '@reduxjs/toolkit'
import { counterSlice } from "./features/counter/counterSlice"
import { userSlice } from './features/user/userSlice'

const rootReducer = combineSlices(counterSlice, userSlice)

export const makeStore = () => {
  return configureStore({
    reducer: rootReducer,
  })
}